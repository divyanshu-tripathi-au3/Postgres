const express = require('express')
const { config } = require('./config')
const { EmployeesRouter } = require('./api/routes/Employees')

const app = express()
app.use(express.json())
app.use('/api', EmployeesRouter)

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
