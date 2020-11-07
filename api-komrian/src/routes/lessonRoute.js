const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const { addLesson } = require('../controller/lessonController');
const { protect } = require('../middleware/auth');
const validateRequest = require('../middleware/validateRequest');

router.post(
  '/',
  [
    check('name')
      .trim()
      .isLength({ min: 2, max: 250 })
      .withMessage('name must be between 2 and 250 characters long'),
    check('section_id').not().isEmpty().withMessage('Section Id not provided'),
    check('lesson_order')
      .not()
      .isEmpty()
      .withMessage('Lesson order not provided'),
    validateRequest
  ],
  addLesson
);

module.exports = router;
