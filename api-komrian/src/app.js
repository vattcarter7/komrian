const express = require('express');

const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const usersRouter = require('./routes/users');

module.exports = () => {
  const app = express();

  app.use(express.json());
  app.use(usersRouter);

  app.use(notFound);
  app.use(errorHandler);

  return app;
};
