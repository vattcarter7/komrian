const dotenv = require('dotenv');
require('colors');

const app = require('./src/app');
const pool = require('./src/pool');

dotenv.config();

pool
  .connect({
    host: 'localhost',
    port: 5432,
    database: 'komrian',
    user: 'vattsopheak',
    password: ''
  })
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app().listen(PORT, () => {
      console.log(
        `Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow
      );
    });
  })
  .catch((err) => console.error(err));
