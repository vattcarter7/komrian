/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
  CREATE TABLE course (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    tokens TSVECTOR,
    active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
  );

  CREATE INDEX course_tokens_idx ON course USING gin(tokens);
`);
};

exports.down = (pgm) => {
  pgm.sql(`
  DROP INDEX course_tokens_idx;
  DROP TABLE course;
`);
};
