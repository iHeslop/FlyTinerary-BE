"use strict";
const Models = require("../models");

//Get Airports from Database
const getFlights = (res) => {
  Models.Flight.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//Get Airports from Database by UserID
const getUserFlights = (req, res) => {
  Models.Flight.findAll({
    where: { userId: req.params.id },
  })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//Add Flights to Database
const createFlights = (data, res) => {
  Models.Flight.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//Updates Flights in Database by FlightID
const updateFlights = (req, res) => {
  let flightId = req.params.flightId;
  Models.Flight.update(req.body, { where: { flightId: flightId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//Delete Flights in Database by FlightID
const deleteFlights = (req, res) => {
  let flightId = req.params.flightId;
  Models.Flight.destroy({ where: { flightId: flightId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getFlights,
  createFlights,
  updateFlights,
  deleteFlights,
  getUserFlights,
};
