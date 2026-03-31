const config = {
  app: {
    port: Number(process.env.PORT || 3001),
    corsOrigin: process.env.CORS_ORIGIN || '*',
    corsMethods: process.env.CORS_METHODS || 'GET,POST,PUT,PATCH,DELETE,OPTIONS',
    bodyLimit: process.env.BODY_LIMIT || '1mb',
    parameterLimit: Number(process.env.PARAMETER_LIMIT || 1000)
  },
  db: {
    host: process.env.DB_HOST || '34.255.11.87',
    port: Number(process.env.DB_PORT || 5432),
    database: process.env.DB_NAME || 'interview',
    user: process.env.DB_USER || 'interview',
    password: process.env.DB_PASSWORD || 'G5gdrg34tergfdrgdtghrthtyhr'
  }
}

module.exports = { config }
