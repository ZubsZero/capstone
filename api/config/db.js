require("dotenv").config();
const { createPool } = require("mysql");
const connection = createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.dbPwd,
  database: process.env.dbName,
  multipleStatements: true,
  connectionLimit: 30,
});

module.exports = connection;