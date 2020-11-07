/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
  CREATE TABLE lesson (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) UNIQUE NOT NULL,
    section_id INT REFERENCES section(id) NOT NULL,
    lesson_order INTEGER NOT NULL,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX lesson_section_id_idx ON lesson(section_id);
`);
};

exports.down = (pgm) => {
  pgm.sql(`
  DROP INDEX lesson_section_id_idx;
  DROP TABLE lesson;
`);
};
