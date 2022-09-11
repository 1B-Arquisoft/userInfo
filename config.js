module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'sectretoJWT',
  },
  mysql: {
    database: process.env.MYSQL_DB || 'USER_INFORMATION',
    user: process.env.MYSQL_USER || 'grupo1b',
    password: process.env.MYSQL_PASSWORD || 'cristianoronaldo',
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
  }
}