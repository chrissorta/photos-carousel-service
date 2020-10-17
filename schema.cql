
DROP KEYSPACE IF EXISTS restaurant_photos;
CREATE KEYSPACE restaurant_photos
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};

USE restaurant_photos;


CREATE TABLE photo (
    id uuid,
    restaurant_id int,
    user_id int,
    restaurant_name text,
    username text,
    first_name text,
    last_name text,
    avatar text,
    photo text,
    description text,
    date date,
    category text,
    PRIMARY KEY (restaurant_id, date)
)
WITH CLUSTERING ORDER BY (date DESC);
