const asyncHandler = require('express-async-handler');
const Course = require('../models/courseModel');

// @desc    Add new course
// @route   POST /api/courses/add
// @access  Private
const addCourse = asyncHandler(async (req, res) => {
  const { title, order } = req.body;

  const course = await Course.create({
    title,
    order
  });

  if (course) {
    res.status(201).json({
      _id: lesson._id,
      title: lesson.title,
      order: lesson.order
    });
  } else {
    res.status(400);
    throw new Error('Invalid lesson data');
  }
});
