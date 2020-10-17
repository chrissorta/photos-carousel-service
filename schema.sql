DROP DATABASE IF EXISTS opentable;

CREATE DATABASE opentable;

-- Make sure we're using our `blog` database
\c opentable;



-- We can create our user table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  firstname VARCHAR,
  lastname VARCHAR,
  avatar VARCHAR
);

-- We can create our post table
CREATE TABLE IF NOT EXISTS restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR
);

CREATE TABLE IF NOT EXISTS photos (
  id SERIAL PRIMARY KEY,
  userId INTEGER REFERENCES users(id),
  restaurantId INTEGER REFERENCES restaurants(id),
  photo VARCHAR,
  description VARCHAR,
  category VARCHAR,
  date DATE DEFAULT CURRENT_DATE
);