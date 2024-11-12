const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUsers(searchString) {
  const { rows } = await pool.query({
    text: "SELECT username FROM usernames WHERE username LIKE ($1);",
    values: [`%${searchString}%`],
  });
  return rows;
}

module.exports = {
  getAllUsernames,
  insertUsername,
  searchUsers,
};
