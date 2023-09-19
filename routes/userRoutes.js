const express = require("express");

const router = express.Router();
const Controllers = require("../controllers");

router.post("/signin", (req, res) => {
  const { email, hashedPassword } = req.body;
  Controllers.userController.signInUser(email, hashedPassword, res);
});

router.post("/create", (req, res) => {
  Controllers.userController.createUsers(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.userController.updateUsers(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.userController.deleteUsers(req, res);
});

module.exports = router;
