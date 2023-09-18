const express = require("express");

const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.airportController.getAirports(res);
});

router.get("/:iata", (req, res) => {
  Controllers.airportController.getIataAirports(req, res);
});

router.post("/create", (req, res) => {
  Controllers.airportController.createAirports(req.body, res);
});

router.put("/:id", (req, res) => {
  Controllers.airportController.updateAirports(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.airportController.deleteAirports(req, res);
});

module.exports = router;
