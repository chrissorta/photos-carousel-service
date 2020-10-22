
DROP KEYSPACE IF EXISTS restaurant_photos;
CREATE KEYSPACE restaurant_photos
WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE restaurant_photos;


CREATE TABLE photo (
    restaurant_id int,
    id uuid,
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
    PRIMARY KEY ( restaurant_id, date)
)
WITH CLUSTERING ORDER BY (date DESC);


COPY photo(id, restaurant_id,date,avatar,category,description,first_name,last_name,photo,restaurant_name,user_id,username) from '/Users/christophersorta/photos-carousel-service/database/CassandraSeed/cassData1.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY photo(id, restaurant_id,date,avatar,category,description,first_name,last_name,photo,restaurant_name,user_id,username) from '/Users/christophersorta/photos-carousel-service/database/CassandraSeed/cassData2.csv' WITH DELIMITER=',' AND HEADER=TRUE;


COPY photo(id, restaurant_id,date,avatar,category,description,first_name,last_name,photo,restaurant_name,user_id,username) from '/Users/christophersorta/photos-carousel-service/database/CassandraSeed/cassData3.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY photo(id, restaurant_id,date,avatar,category,description,first_name,last_name,photo,restaurant_name,user_id,username) from '/Users/christophersorta/photos-carousel-service/database/CassandraSeed/cassData4.csv' WITH DELIMITER=',' AND HEADER=TRUE;