const express = require('express');
const router = express.Router();
const passport = require('passport');
const request = require('request');
const config = require('../config/google');

const User = require('../models/user');


router.get('/distance', (req, res, next) => {
  var origins = req.query.address
  var destinations = "Washington,DC";
  var requestURL = config.baseURL+config.units+config.origins+origins+config.destinations+destinations+config.key+config.matrixKey;

  
  request(requestURL, (err, res2, body) => {

    console.log('statusCode:', res2 && res.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    res.send(body);
  });
});



module.exports = router;
