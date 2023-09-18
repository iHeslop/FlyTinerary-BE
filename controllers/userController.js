"use strict";
const Models = require("../models");

//Get Users in Database
const getUsers = (res) => {
  Models.User.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
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
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};
