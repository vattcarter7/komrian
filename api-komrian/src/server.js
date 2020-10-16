const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
require('colors');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

connectDB();

const app = express();

// Route files
// const auth = require('./routes/authRoute');

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Enable CORS
app.use(cors());

app.use('/api/users', userRoutes);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.get('/api', (req, res) => {
  return res
    .status(200)
    .send({ message: ' congrats - KOMRIAN API first endpoint is working ' });
});

// Mount routers
// app.use('/api/v1/auth', auth);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`App listening on port ${PORT}`.cyan.bold);
});
