const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const { notFound, errorHandler } = require('./middleware/errorMiddleware');

// Route files
const auth = require('./routes/authRoute');
const course = require('./routes/courseRoute');
const lesson = require('./routes/lessonRoute');
const section = require('./routes/sectionRoute');

module.exports = () => {
  const app = express();

  // Body parser
  app.use(express.json());

  // Cookie parser
  app.use(cookieParser());

  // Enable CORS
  app.use(cors());

  app.get('/api', (req, res) => {
    return res
      .status(200)
      .send({ message: ' congrats - KOMRIAN API first endpoint is working ' });
  });

  // Mount Routers
  app.use('/api/v1/auth', auth);
  app.use('/api/v1/course', course);
  app.use('/api/v1/lesson', lesson);
  app.use('/api/v1/section', section);

  app.use(notFound);
  app.use(errorHandler);

  return app;
};
