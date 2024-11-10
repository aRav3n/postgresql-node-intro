const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: process.env.ROLE_NAME,
  database: "top_users",
  password: process.env.ROLE_PASSWORD,
  port: 5432,
});
