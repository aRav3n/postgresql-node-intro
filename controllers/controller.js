const db = require("../db/queries");

async function indexActionGet(req, res) {
  const usernames = await db.getAllUsernames();
  // console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
}

async function newActionGet(req, res) {
  res.render("new", {
    title: "New Page",
  });
}

async function newActionPost(req, res) {
  const { userName } = req.body;
  await db.insertUsername(userName);
  res.redirect("/");
}

module.exports = {
  indexActionGet,
  newActionGet,
  newActionPost,
};
