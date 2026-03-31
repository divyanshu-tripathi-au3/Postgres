const EmployeesModel = require('../models/Employees')

const getEmployees = async (req, res) => {
  const data = await EmployeesModel.getAllEmployees()
  return res.status(200).json({
    status: true,
    message: 'Employees fetched successfully',
    data
  })
}

const getTotalSalary = async (req, res) => {
  const data = await EmployeesModel.getSalarySummary()
  return res.status(200).json({
    status: true,
    message: 'Salary summary fetched successfully',
    data: {
      totalSalary: Number(data.total_salary),
      salaryCount: Number(data.salary_count)
    }
  })
}

module.exports = {
  getEmployees,
  getTotalSalary
}
