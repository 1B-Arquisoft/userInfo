module.exports = {
  api: {
    port: process.env.API_PORT || 3000,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'sectretoJWT',
  },
  mysql: {
    database: process.env.MYSQL_DB || 'USER_INFORMATION',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'contrasenasegura',
    host: process.env.MYSQL_HOST || '34.170.38.178',
    port: process.env.MYSQL_PORT || 3306,
  }
}