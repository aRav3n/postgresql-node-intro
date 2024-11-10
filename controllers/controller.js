const userStorage = [];
const { body, validationResult } = require("express-validator");
const validateUser = [
  body("userName")
    .trim()
    .isAlphanumeric()
    .withMessage("Username may only contain letters and numbers")
    .isLength({ min: 1, max: 10 })
    .withMessage("Username must be between 1 and 10 characters"),
];

const addUser = (user) => {
  userStorage.push(user);
};

exports.indexActionGet = (req, res) => {
  console.log("User names will be logged here - WIP");
};

exports.newActionGet = (req, res) => {
  res.render("new", {
    title: "New Page",
  });
};

exports.newActionPost = [
  validateUser,
  (req, res) => {
    console.log("username to be saved: ", req.body.userName);
    /*
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("new", {
        title: "New Page",
        errors: errors.array(),
      });
    }

    const { userName } = req.body;
    addUser({ userName });
    res.redirect("/");
    */
  },
];
