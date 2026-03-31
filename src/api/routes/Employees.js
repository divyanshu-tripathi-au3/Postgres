const express = require('express')
const EmployeesController = require('../controllers/Employees')

const router = express.Router()

// to get all employees
router.get('/employees', EmployeesController.getEmployees)

// to get total salary of all employees
router.get('/employees/total-salary', EmployeesController.getTotalSalary)

module.exports = { EmployeesRouter: router }
