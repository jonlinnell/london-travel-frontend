const fs = require('fs')

const env = `${__dirname}/.env`

const keys = ['api', 'supportContact']

if (!fs.existsSync(env)) {
  console.log(`Environment file (${env}) does not exist. Creating it.`)
  keys.forEach((e) => {
    if (process.env[e]) {
      fs.writeFileSync(env, `${e}=${process.env[e]}\n`, { flag: 'a' })
    }
  })
} else {
  console.log(`Environment file (${env}) already exists. Doing nothing.`)
}
