// Importing express
const express = require("express");
const app = express();

// Importing configurations
const config = require("./config/config");
const moviesApi = require("./routes/movies");

moviesApi(app);

app.listen(config.port, () => {
  console.log("Listening hhtp://localhost:" + config.port);
});
