const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "andy",
  database: "top_users",
  password: "<role_password>",
  port: 5432,
});
