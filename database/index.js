const { Client } = require('pg');

const client = new Client({
  user: 'christophersorta',
  database: 'restaurant_photos'
});

client.connect()
  .then(() => console.log('Successful connection to Postgresql'))
  .catch((err) => console.log('error', err.stack));

const getPhotos = (id, callback) => {
  const query = `SELECT * FROM photos p join users u on p.userId = u.id WHERE p.restaurantId = ${id}`;
  client.query(query, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.rows);
    }
  });
};

const postPhoto = (photoInfo, callback) => {
  const query = 'INSERT INTO PHOTOS(userId, restaurantId, photo, description, category, date) values ($1,$2,$3,$4,$5,$6)';
  const values = [photoInfo.userId, photoInfo.restaurantId, photoInfo.photo,
    photoInfo.description, photoInfo.category, photoInfo.date];
  client.query(query, values, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.rows);
    }
  });
};

const deletePhoto = (photoId, callback) => {
  const query = `DELETE FROM PHOTOS where id=${photoId}`;
  client.query(query, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.rows);
    }
  });
};

const updatePhoto = (photoInfo, callback) => {
  const query = `UPDATE PHOTOS set photo=${photoInfo.photo}, description=${photoInfo.description}, category=${photoInfo.category} where restaurantId=${photoInfo.photoId}`;
  client.query(query, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result.rows);
    }
  });
};

module.exports.getPhotos = getPhotos;
module.exports.postPhoto = postPhoto;
module.exports.deletePhoto = deletePhoto;
module.exports.updatePhoto = updatePhoto;
