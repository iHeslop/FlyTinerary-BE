"use strict";
const bcrypt = require("bcryptjs");
const Models = require("../models");

//Get Users in Database
const signInUser = async (email, hashedPassword, res) => {
  try {
    const user = await Models.User.findOne({ where: { email: email } });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(hashedPassword, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    res.status(200).json({ message: "Sign-in successful", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//Add User to Database
const createUsers = (data, res) => {
  Models.User.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//Update User in Database
const updateUsers = (req, res) => {
  let userId = req.params.id;
  Models.User.update(req.body, { where: { id: userId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//Delete User from Database
const deleteUsers = (req, res) => {
  let userId = req.params.id;
  Models.User.destroy({ where: { id: userId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  signInUser,
  createUsers,
  updateUsers,
  deleteUsers,
};
