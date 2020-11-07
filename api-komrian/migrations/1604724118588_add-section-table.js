/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
  CREATE TABLE section (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) UNIQUE NOT NULL,
    course_id INT REFERENCES course(id) NOT NULL,
    section_order INTEGER NOT NULL,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX section_course_id_idx ON section(course_id);
`);
};

exports.down = (pgm) => {
  pgm.sql(`
  DROP INDEX section_course_id_idx;
  DROP TABLE section;
`);
};
