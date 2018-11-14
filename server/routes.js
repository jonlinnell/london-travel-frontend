const fetchTubeStatus = require('./lib/fetchTubeStatus')
const getBusDepartures = require('./lib/getBusDepartures')
const getRailDepartureBoard = require('./lib/getRailDepartureBoard')

const routes = (app) => {
  app.get('/tube', (req, res) => {
    fetchTubeStatus()
      .then(data => res.json(data))
      .catch(error => res.status(500).send(`An error occurred loading the tube data: ${error}`))
  })

  app.get('/bus/:stopCode/:limit?', (req, res) => {
    // const { stopCode, limit } = req.params

    if (!req.params.stopCode) res.status(400).send('No stop code provided.')

    getBusDepartures(req.params)
      .then(data => res.json(data))
      .catch(error => res.status(500).send(`An error occurred loading the bus data: ${error}`))
  })

  app.get('/rail/:station/:destination?', (req, res) => {
    // const { station, destination } = req.params

    if (!req.params.station) res.status(400).send('No station specified.')

    getRailDepartureBoard(req.params)
      .then(data => res.json(data))
      .catch(error => res.status(500).send(error))
  })
}

module.exports = routes
