#!/usr/bin/env node
/* eslint-disable no-console */

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
const rfs = require('rotating-file-stream')

const { resolve } = require('path')

const DEFAULT_PORT = 3000
const APP_NAME = 'london-travel'

require('dotenv').config({ path: resolve(`${__dirname}/.env`) })

const app = express()

const {
  ALLOWED_ORIGINS,
  USE_TEST_DATA,
  LOG_DIR,
  NODE_ENV,
  PORT,
} = process.env

const stream = rfs(resolve(LOG_DIR ? `${LOG_DIR}/${APP_NAME}.log` : `${__dirname}/../logs/${APP_NAME}.log`), {
  size: '10M',
  interval: '1d',
  compress: 'gzip',
})

app.use(bodyParser.json())

app.use(cors({
  origin: ALLOWED_ORIGINS ? ALLOWED_ORIGINS.split(',') : true,
}))

app.use(morgan(NODE_ENV === 'development' ? 'dev' : 'combined', {
  stream: NODE_ENV === 'development' ? process.stdout : stream,
}))

require('./routes')(app)

if (USE_TEST_DATA) { console.log('Using test data. Unset USE_TEST_DATA to use live feeds.') }
if (NODE_ENV === 'development') { console.log('Starting in development mode.') }

app.listen(PORT || DEFAULT_PORT)
