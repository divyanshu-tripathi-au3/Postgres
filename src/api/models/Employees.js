const { pool } = require('../../lib/db')

const getAllEmployees = async () => {
  const query = 'SELECT * FROM public.employees ORDER BY id ASC'
  const { rows } = await pool.query(query)
  return rows
}

const getSalarySummary = async () => {
  const query = `
    SELECT
      COALESCE(SUM(salary), 0) AS total_salary,
      COUNT(salary) AS salary_count
    FROM public.employees
  `
  const { rows } = await pool.query(query)
  return rows[0]
}

module.exports = {
  getAllEmployees,
  getSalarySummary
}
