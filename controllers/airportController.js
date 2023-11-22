"use strict";
const Models = require("../models");
const axios = require("axios");

const options = {
  method: "GET",
  url: "https://priceline-com-provider.p.rapidapi.com/v2/flight/downloadAirports",
  headers: {
    "X-RapidAPI-Key": "d5d47b738amsh0218173db374270p186c18jsnae1665f158e0",
    "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com",
  },
};

//Get Airports from Database
const getAirports = (res) => {
  Models.Airport.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//Get Airports from Database by  IATA
const getIataAirports = (req, res) => {
  Models.Airport.findAll({
    where: { iata: req.params.iata },
  })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//Add Airports to Database
const createAirports = (data, res) => {
  Models.Airport.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//Update Airports in Database by id
const updateAirports = (req, res) => {
  let airportId = req.params.id;
  Models.Airport.update(req.body, { where: { id: airportId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//Delete Airports in Database by id
const deleteAirports = (req, res) => {
  let airportId = req.params.id;
  Models.Airport.destroy({ where: { id: airportId } })
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

//Store Airports in Database from External API
const storeAirports = async (req, res) => {
  let data = await axios.request(options);
  let apiData = data.data["getSharedBOF2.Downloads.Air.Airports"];
  let airportsArray = Object.values(apiData.results.airports);
  let airportData = airportsArray.map((airport) => {
    return {
      iata: airport.iata,
      name: airport.airport,
      city: airport.city_name,
      lat: airport.latitude,
      lon: airport.longitude,
    };
  });
  console.log(airportData);

  airportData.forEach(async (airport) => {
    let created = await Models.Airport.findOrCreate({
      where: { name: airport.name },
      defaults: {
        iata: airport.iata,
        name: airport.name,
        city: airport.city,
        lat: airport.lat,
        lon: airport.lon,
      },
    });
    created ? console.log("Data being added to database...") : null;
  });
};

module.exports = {
  getAirports,
  createAirports,
  updateAirports,
  deleteAirports,
  storeAirports,
  getIataAirports,
};
