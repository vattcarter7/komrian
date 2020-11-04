/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL check (email ~* '^.+@.+\..+$'),
      password VARCHAR(128) NOT NULL,
      firstname VARCHAR(100) NOT NULL,
      lastname VARCHAR(100) NOT NULL,
      user_role VARCHAR(50) DEFAULT 'user',
      tokens tsvector,
      password_reset_token VARCHAR(200),
      password_reset_expires TIMESTAMP WITH TIME ZONE,
      active BOOLEAN DEFAULT true,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );

    CREATE INDEX users_tokens_idx ON users USING gin(tokens);
  `);
};

exports.down = (pgm) => {
  pgm.sql(`
    DROP INDEX users_tokens_idx;
    DROP TABLE users;
  `);
};
