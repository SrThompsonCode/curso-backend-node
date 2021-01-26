const express = require('express');
const MoviesServices = require('../services/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesServides = new MoviesServices();
  //Teoria Middleware
  router.get('/', async function (req, res, next) {
    const { tags } = req.query;
    try {
      const movies = await moviesServides.getMovies({ tags });
      res.status(200).json({
        data: movies,
        message: 'movies listed',
      });
    } catch (error) {
      next(error);
    }
  });

  router.get('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;
    try {
      const movies = await moviesServides.getMovie(movieId);
      res.status(200).json({
        data: movies,
        message: 'movie retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async function (req, res, next) {
    const { body: movie } = req.body;
    try {
      const createMovieId = await moviesServides.createMovie({ movie });
      res.status(201).json({
        data: createMovieId,
        message: 'movie create',
      });
    } catch (error) {
      next(error);
    }
  });

  router.put('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req.body;

    try {
      const updateMovieId = await moviesServides.updateMovie({
        movieId,
        movie,
      });
      res.status(200).json({
        data: updateMovieId,
        message: 'movie updated',
      });
    } catch (error) {
      next(error);
    }
  });

  router.patch('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;
    const { body: movie } = req.body;
    try {
      const updatedMovieId = await moviesServides.partialUpdateMovie({
        movieId,
        movie,
      });
      res.status(200).json({
        data: updatedMovieId,
        message: 'movie updated partially',
      });
    } catch (error) {
      next(error);
    }
  });
  router.delete('/:movieId', async function (req, res, next) {
    const { movieId } = req.params;

    try {
      const deletedMovieId = await moviesServides.deleteMovie({ movieId });
      res.status(200).json({
        data: deletedMovieId,
        message: 'movie deleted',
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;
