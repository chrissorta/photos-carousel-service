DROP DATABASE IF EXISTS restaurant_photos;

CREATE DATABASE restaurant_photos;

-- Make sure we're using our `blog` database
\c restaurant_photos;



-- We can create our user table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(25) UNIQUE,
  firstname VARCHAR(15),
  lastname VARCHAR(15),
  avatar VARCHAR(100)
);

-- We can create our post table
CREATE TABLE IF NOT EXISTS restaurants (
  id SERIAL PRIMARY KEY,
  name VARCHAR(25),
  city VARCHAR(15),
  state VARCHAR(11),
  rating smallint
);

CREATE TABLE IF NOT EXISTS photos (
  id SERIAL PRIMARY KEY,
  userId INTEGER REFERENCES users(id),
  restaurantId INTEGER REFERENCES restaurants(id),
  photo VARCHAR(100),
  description VARCHAR,
  category VARCHAR(10),
  date DATE DEFAULT CURRENT_DATE
);