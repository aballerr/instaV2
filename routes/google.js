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


/**
 * processes a single distance request between the user and the origin address provided
 * @param {Object} user - json object representing user information from the mongo database
 * @param {int} range - int representing the range of distance people would like to use
 * @param {string} origins - represents the current address the user has provided
 * @param {function} callback - callback function to keep track of how much of the database has been processed
 * @param {function} res - funtion to send a response back to the user when the database has been completely processed
 */
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

/**
* callback to assess if we have gone through the entire mongo database
* @param {function} res - function to send response back to the user
*/
function done(res) {
  if (processed == 12){
      res.send(distances);
  }
}

//This gets all users within the specified query distance
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
