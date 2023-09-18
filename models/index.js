"use strict";
const Airport = require("./Airport");
const Flight = require("./Flights");
const User = require("./User");

async function init() {
  await Airport.sync();
  await User.sync();
  await Flight.sync();
}
init();

module.exports = { Airport, User, Flight };
