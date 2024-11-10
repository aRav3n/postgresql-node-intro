const db = require("../db/queries");

async function indexActionGet(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

async function newActionGet(req, res) {
  // render the form
}

async function newActionPost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  indexActionGet,
  newActionGet,
  newActionPost,
};
