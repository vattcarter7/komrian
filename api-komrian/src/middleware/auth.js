const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const asyncHandler = require('express-async-handler');

const pool = require('../pool');

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Set token from Bearer token in header
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.komrianjwt && req.cookies.komrianjwt !== 'loggedout') {
    // Set token from cookie
    token = req.cookies.komrianjwt;
  }

  if (!token) {
    res.status(403);
    throw new Error('Not authorized to access this route');
  }

  try {
    // verify token
    const decoded = await promisify(jwt.verify)(
      token,
      process.env.JWT_PRIVATE_KEY
    );
    const queryText = 'SELECT * FROM users WHERE id = $1';
    const { rows } = await pool.query(queryText, [decoded.userId]);
    if (!rows[0]) {
      res.status(403);
      throw new Error('Not authorized to access this route');
    }

    // GRAND ACCESS TO PROTECTED ROUTE
    req.user = {
      id: decoded.userId,
      firstname: rows[0].firstname,
      lastname: rows[0].lastname,
      gender: rows[0].gender,
      email: rows[0].email,
      user_role: rows[0].user_role
    };
    res.locals.user = req.user;
    next();
  } catch (err) {
    res.status(403);
    throw new Error('Not authorized to access this route');
  }
});

// Grand access to specific roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.user_role)) {
      res.status(403);
      throw new Error(
        `User role ${req.user.user_role} is not authorized to this route`
      );
    }
    next();
  };
};
