const express = require("express");
const { moviesMock } = require("../utils/mocks/movies");

const moviesApi = (app) => {
  const router = express.Router();
  app.use("/api/movies", router);
  router.get("/", async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock);
      res.status(200).json({
        data: movies,
        message: "movies listed.",
      });
    } catch (err) {
      next(err);
    }
  });
  router.get("/:moviesId", async function (req, res, next) {
    try {
      const movies = await Promise.resolve(moviesMock[0]);
      res.status(200).json({
        data: movies,
        message: "movies.",
      });
    } catch (err) {
      next(err);
    }
  });
  router.post("/", async function (req, res, next) {
    try {
      const createMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(201).json({
        data: createMovieId,
        message: "Movie created.",
      });
    } catch (err) {
      next(err);
    }
  });
  router.put("/:moviesId", async function (req, res, next) {
    try {
      const updatedMovieId = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: updatedMovieId,
        message: "movie updated.",
      });
    } catch (err) {
      next(err);
    }
  });
  router.delete("/:moviesId", async function (req, res, next) {
    try {
      const deletedMovie = await Promise.resolve(moviesMock[0].id);
      res.status(200).json({
        data: deletedMovie,
        message: "movie deleted.",
      });
    } catch (err) {
      next(err);
    }
  });
};

module.exports = moviesApi;
