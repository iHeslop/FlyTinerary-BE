const express = require("express");

const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.flightController.getFlights(res);
});

router.get("/:id", (req, res) => {
  Controllers.flightController.getUserFlights(req, res);
});

router.post("/create", (req, res) => {
  Controllers.flightController.createFlights(req.body, res);
});

router.put("/:flightId", (req, res) => {
  Controllers.flightController.updateFlights(req, res);
});

router.delete("/:flightId", (req, res) => {
  Controllers.flightController.deleteFlights(req, res);
});

module.exports = router;
