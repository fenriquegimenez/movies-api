const express = require("express");
const MoviesService = require("../services/movies");

const moviesApi = (app) => {
  const router = express.Router();
  app.use("/api/movies", router);

  const moviesService = new MoviesService();

  router.get("/", async function (req, res, next) {
    const { tags } = req.query;
    try {
      const movies = await moviesService.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: "movies listed.",
      });
    } catch (err) {
      next(err);
    }
  });
  router.get("/:moviesId", async function (req, res, next) {
    const { movieId } = req.params;
    try {
      const movies = await moviesService.getMovie({ movieId });
      res.status(200).json({
        data: movies,
        message: "movie returned.",
      });
    } catch (err) {
      next(err);
    }
  });
  router.post("/", async function (req, res, next) {
    const { body: movie } = req;
    try {
      const createMovieId = await moviesService.createMovie({ movie });
      res.status(201).json({
        data: createMovieId,
        message: "Movie created.",
      });
    } catch (err) {
      next(err);
    }
  });
  router.put("/:moviesId", async function (req, res, next) {
    const { body: movie } = req.body;
    const { movieId } = req.params;
    try {
      const updatedMovieId = await moviesService.updateMovie({
        movie,
        movieId,
      });
      res.status(200).json({
        data: updatedMovieId,
        message: "movie updated.",
      });
    } catch (err) {
      next(err);
    }
  });
  router.delete("/:moviesId", async function (req, res, next) {
    const { movieId } = req.params;
    try {
      const deletedMovie = await moviesService.deleteMovie({ movieId });
      res.status(200).json({
        data: deletedMovie,
        message: "movie deleted.",
      });
    } catch (err) {
      next(err);
    }
  });
  router.patch("/:moviesId", async function (req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req;
    try {
      const partialUpdatedMovieId = await moviesService.partialUpdateMovie({
        movieId,
        movie,
      });
      res.status(200).json({
        data: partialUpdatedMovieId,
        message: "movie partially updated.",
      });
    } catch (err) {
      next(err);
    }
  });
};

module.exports = moviesApi;
