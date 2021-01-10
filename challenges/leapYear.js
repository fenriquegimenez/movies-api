const express = require("express");
const leapYear = require("leap-year");
const isNumber = require("is-number");

const config = require("../config/config");

const app = express();

app.get("/leap/:year", (req, res) => {
  const year = req.params.year;
  if (!isNumber(year)) {
    res.status(404).send("Not a year");
  }
  if (leapYear(parseInt(year))) {
    res.send(`The year ${year} is leap.`);
  } else {
    res.send(`The year ${year} is not leap.`);
  }
});

const port = config.challenges.port;
app.listen(port);

console.log("[Server] Server listening http://localhost: " + port);
