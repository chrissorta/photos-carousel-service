require('newrelic');

/* eslint-disable arrow-body-style */
/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database/index.js');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {



  const app = express();
  const port = 3003;

  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }));
  // parse application/json
  app.use(bodyParser.json());

  app.use('/', express.static(path.join(__dirname, '/../client/dist')));

  app.get('/api/restaurants/:id', (req, res) => {
    db.getPhotos(req.params.id, (err, results) => {
      if (err) {
        res.status(401).send(err);
      } else {
        res.status(200).send(results);
      }
    });
  });

  app.post('/api/restaurants/:restaurantId/image', (req, res) => {
    req.body.restaurantId = req.params.restaurantId;
    db.postPhoto(req.body, (err, results) => {
      if (err) {
        res.status(401).send(err);
      } else {
        console.log('Successful post to restaurant ', req.params.restaurantId);
        res.status(201).send(results);
      }
    });
  });

  app.put('/api/restaurants/:photoId', (req, res) => {
    req.body.photoId = req.params.restaurantId;
    db.updatePhoto(req.body, (err, results) => {
      if (err) {
        res.status(401).send(err);
      } else {
        console.log('Successful post to restaurant ', req.params.restaurantId);
        res.status(201).send(results);
      }
    });
  });

  app.delete('/api/restaurant/:id', (req, res) => {
    db.deletePhoto(req.params.id, (err, results) => {
      if (err) {
        res.status(401).send(err);
      } else {
        res.status(201).send(results);
      }
    });
  });

  app.listen(port, () => {
    console.log(`Photos-Gallery App Listening on Port http://localhost:${port}`);
  });

}
// module.exports = {
//   app,
//   express,
// };
