const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
require("./dbConnect");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MySQL application." });
});

let airportRoutes = require("./routes/airportRoutes");
let userRoutes = require("./routes/userRoutes.js");
let flightRoutes = require("./routes/flightRoutes");

app.use("/airports", airportRoutes);
app.use("/users", userRoutes);
app.use("/flights", flightRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 4000;

const airportController = require("./controllers/airportController");
const airportModel = require("./models/Airport");

async function storeAirports() {
  try {
    const airports = await airportModel.findAll();
    if (airports.length === 0) {
      await airportController.storeAirports();
      console.log("Airports added to database.");
    } else {
      console.log("Airports already exist in database.");
    }
  } catch (error) {
    console.log(error);
  }
}

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}.`);
  await storeAirports();
});
