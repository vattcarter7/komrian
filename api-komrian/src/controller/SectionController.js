const asyncHandler = require('express-async-handler');

const pool = require('../pool');

// @desc      Create a section
// @route     POST /api/v1/section
// @access    Private
exports.addSection = asyncHandler(async (req, res, next) => {
  const insertSql = `INSERT INTO section (name, course_id, section_order)
                     VALUES ($1, $2, $3) returning *`;
  const param = [
    req.body.name.trim().toLowerCase(),
    req.body.course_id,
    req.body.section_order
  ];

  const { rows } = await pool.query(insertSql, param);
  if (!rows[0]) {
    res.status(403);
    throw new Error('Cannot add this section');
  }

  res.status(201).json(rows[0]);
});
