const express = require('express');
const { check } = require('express-validator');

const router = express.Router();

const { addSection } = require('../controller/SectionController');
const { protect } = require('../middleware/auth');
const validateRequest = require('../middleware/validateRequest');

router.post(
  '/',
  [
    check('name')
      .trim()
      .isLength({ min: 2, max: 250 })
      .withMessage('name must be between 2 and 250 characters long'),
    check('course_id').not().isEmpty().withMessage('Course Id not provided'),
    check('section_order')
      .not()
      .isEmpty()
      .withMessage('Section order not provided'),
    validateRequest
  ],
  addSection
);

module.exports = router;
