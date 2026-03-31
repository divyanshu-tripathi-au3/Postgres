# Employee Interview Service

Simple Node.js + Express service with layered architecture (`routes` -> `controllers` -> `models`) and PostgreSQL.

## APIs

- `GET /api/employees`
  - Query: `SELECT * FROM public.employees ORDER BY id ASC`
- `GET /api/employees/total-salary`
  - Query:
    - `SUM(salary)` as `totalSalary`
    - `COUNT(salary)` as `salaryCount`

## Setup

1. Copy env file:
   - `cp .env.example .env`
2. Install dependencies:
   - `npm install`
3. Run service:
   - `npm run dev`

Default port: `3001`
