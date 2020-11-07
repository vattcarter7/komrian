const asyncHandler = require('express-async-handler');

const pool = require('../pool');

// @desc      Create a lesson
// @route     POST /api/v1/lesson
// @access    Private
exports.addLesson = asyncHandler(async (req, res, next) => {
  const insertSql = `INSERT INTO section (name, section_id, lesson_order)
                     VALUES ($1, $2, $3) returning *`;
  const param = [
    req.body.name.trim().toLowerCase(),
    req.body.section_id,
    req.body.lesson_order
  ];

  const { rows } = await pool.query(insertSql, param);
  if (!rows[0]) {
    res.status(403);
    throw new Error('Cannot add this lesson');
  }

  res.status(201).json(rows[0]);
});
