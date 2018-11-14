#!/usr/bin/env node
/* eslint-disable no-console */

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const { resolve } = require('path')

require('dotenv').config({ path: resolve(`${__dirname}/.env`) })

const app = express()

const { ALLOWED_ORIGINS, USE_TEST_DATA } = process.env

app.use(bodyParser.json())
app.use(cors({
  origin: ALLOWED_ORIGINS ? ALLOWED_ORIGINS.split(',') : true,
}))

const port = process.env.PORT || 3000

require('./routes')(app)

if (USE_TEST_DATA) { console.log('Using test data. Unset USE_TEST_DATA to use live feeds.') }

app.listen(port, () => console.log(`Listening on port ${port}`))
