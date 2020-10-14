const path = require('path');
const express = require('express');
const morgan = require('morgan');
require('colors');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const errorHandler = require('./helpers/error');

const app = express();

// Route files
// const auth = require('./routes/authRoute');

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

// Enable CORS
app.use(cors());

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

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`App listening on port ${PORT}`.cyan.bold);
});
