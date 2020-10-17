const express = require('express');
const { check } = require('express-validator');
const router = express.Router();

const validateRequest = require('../middleware/validateRequest');

const { addLesson } = require('../controllers/lessonController');

const { protect } = require('../middleware/authMiddleware');

// router.get('/', getCourseLesson)

router.post(
  '/add',
  [
    check('title')
      .trim()
      .isLength({ min: 2, max: 50 })
      .withMessage('name must be between 2 and 50 characters long'),
    check('order')
      .trim()
      .isInt()
      .withMessage('Order must be an integer number'),
    validateRequest
  ],
  addLesson
);

module.exports = router;
