const express = require('express');
const router = express.Router();
const passport = require('passport');
const request = require('request');
const config = require('../config/google');

const User = require('../models/user');

var length = 0;
var processed = 0;
var distances = [];

function setDistance() {
  User.find({}, function(err, users) {
    length = users.length;
  });
}

function distanceRequest(user, range, origins, callback, res){
  var destination = user.address;
  var requestURL = config.baseURL+config.units+config.origins+origins+config.destinations+destination+config.key+config.matrixKey;
  request(requestURL, (err, res2, body) => {

    body = JSON.parse(body);

    var userData = {};
    userData["destination_address"] = body.destination_addresses[0];
    userData["distance"] = body.rows[0].elements[0].distance;
    userData["email"] = user.email;

    var distance = parseInt(userData.distance.text.replace(/\D/g,''));
    console.log(range);

    if(distance <= range) {
      distances.push(userData);
    }
    processed += 1;
    done(res);
  });
}

function done(res) {
  if (processed == 12){
      res.send(distances);
  }
}


router.get('/distances', (req, res, next) => {
  processed = 0;
  distances = [];
  setDistance();
  
  var origins = req.query.address;
  var range = req.query.range;
  var requestURL = config.baseURL+config.units+config.origins+origins+config.destinations;
  var keyURL = config.key+config.matrixKey;

  User.find({}, function(err, users) {
    var userMap = {};
    length = users.length;

    users.forEach(function(user) {
      userMap[user._id] = user;
      distanceRequest(user, range, origins, done, res);
    });
  });
});


module.exports = router;
