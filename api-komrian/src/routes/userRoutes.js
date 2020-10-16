const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

const validateRequest = require('../middleware/validateRequest');

const { registerUser, loginUser } = require('../controllers/userController');

const { protect } = require('../middleware/authMiddleware');

router.post(
  '/register',
  [
    check('email').trim().isEmail().withMessage('Email must be valid'),
    check('name')
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('name must be between 2 and 50 characters long'),
    check('password')
      .isLength({ min: 6 })
      .withMessage('password must be at least 6 characters long'),
    validateRequest
  ],
  registerUser
);

router.post(
  '/login',
  [
    check('email')
      .trim()
      .isEmail()
      .withMessage('Please provided a valid email'),
    check('password').not().isEmpty().withMessage('Password is required'),
    validateRequest
  ],
  loginUser
);

module.exports = router;
