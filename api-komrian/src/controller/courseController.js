const asyncHandler = require('express-async-handler');

const pool = require('../pool');

// @desc      Create a course
// @route     POST /api/v1/course
// @access    Private
exports.addCourse = asyncHandler(async (req, res, next) => {
  const insertSql = `INSERT INTO course (name, tokens) VALUES ($1, to_tsvector($2)) returning *`;
  const param = [
    req.body.name.trim().toLowerCase(),
    req.body.name.trim().toLowerCase()
  ];

  const { rows } = await pool.query(insertSql, param);
  if (!rows[0]) {
    res.status(403);
    throw new Error('Cannot add this course');
  }

  res.status(201).json(rows[0]);
});
