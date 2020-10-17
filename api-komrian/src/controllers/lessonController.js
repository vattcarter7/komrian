const asyncHandler = require('express-async-handler');
const Lesson = require('../models/lessonModel');

// @desc    Add new lesson
// @route   POST /api/lessons/add
// @access  Private
const addLesson = asyncHandler(async (req, res) => {
  const { title, order } = req.body;

  const lesson = await Lesson.create({
    title,
    order
  });

  if (lesson) {
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

// @desc    get course lessons
// @route   GET /api/lessons/course/:courseId
// @access  Private
const getCourseLessons = asyncHandler(async (req, res) => {
  const courseLessons = await Lesson.create({
    title,
    order
  });

  if (lesson) {
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

module.exports = {
  addLesson
};
