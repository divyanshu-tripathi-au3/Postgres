const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const { config } = require('./config')
const routes = require('./api/routes')

const app = express()
const {
  corsOrigin: CORS_ORIGIN,
  corsMethods: CORS_METHODS,
  bodyLimit: BODY_LIMIT,
  parameterLimit: PARAMETER_LIMIT
} = config.app

const corsOptions = { origin: CORS_ORIGIN, methods: CORS_METHODS }

app.use(helmet())
app.use(cors(corsOptions))
app.use(express.json({ limit: BODY_LIMIT }))
app.use(
  express.urlencoded({
    limit: BODY_LIMIT,
    extended: true,
    parameterLimit: PARAMETER_LIMIT
  })
)
app.use('/', routes)

app.get('/health', (req, res) => {
  res.status(200).json({ status: true, message: 'OK' })
})

app.use((err, req, res, next) => {
  console.error(err)
  return res.status(500).json({
    status: false,
    message: 'Internal server error'
  })
})

app.listen(config.app.port, () => {
  console.log(`Employee service running on port ${config.app.port}`)
})
