const express = require('express')
const { EmployeesRouter } = require('./Employees')

const router = express.Router()

router.use('/api', EmployeesRouter)

module.exports = router