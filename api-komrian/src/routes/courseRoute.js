const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const { addCourse } = require('../controller/courseController');
const { protect } = require('../middleware/auth');
const validateRequest = require('../middleware/validateRequest');

router.post(
  '/',
  [
    check('name')
      .trim()
      .isLength({ min: 2, max: 250 })
      .withMessage('name must be between 2 and 250 characters long'),
    validateRequest
  ],
  addCourse
);

module.exports = router;
