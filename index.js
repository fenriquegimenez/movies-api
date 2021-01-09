// Importing express
const express = require("express");
const app = express();

// Importing configurations
const config = require("./config/config");

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/json", (req, res) => {
  res.json({ hello: "world" });
});

app.listen(config.port, () => {
  console.log("Listening hhtp://localhost:" + config.port);
});
