const asyncHandler = require('express-async-handler');
const Section = require('../models/sectionModel');

// @desc    Add new section
// @route   POST /api/sections/add
// @access  Private
const addSection = asyncHandler(async (req, res) => {
  const { title, order } = req.body;

  const section = await Section.create({
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
