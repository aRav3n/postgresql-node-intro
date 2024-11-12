const db = require("../db/queries");

async function indexActionGet(req, res) {
  const usernames = await db.getAllUsernames();
  // res.send("Usernames: " + usernames.map((user) => user.username).join(", "));
  res.render("index", {
    title: "Users",
    usernames: usernames,
  });
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

async function searchActionGet(req, res) {
  const { searchString } = req.query;
  const searchResults = await db.searchUsers(searchString);
  res.render("search", {
    title: "Search Results",
    searchResults: searchResults,
  });
}

module.exports = {
  indexActionGet,
  newActionGet,
  newActionPost,
  searchActionGet,
};
