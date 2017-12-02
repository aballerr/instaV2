const express = require('express');
const router = express.Router();
const passport = require('passport');
const request = require('request');
const config = require('../config/instagram');

const User = require('../models/user');


//authenticates a users instagram
router.get('/authenticate', (req, res, next) => {
  var requestURL = 'https://api.instagram.com/oauth/authorize/?client_id='+config.clientID+'&redirect_uri='+config.redirect_uri+'&response_type=code'+config.scope;
  res.redirect(requestURL);
});


//
router.post('/token', passport.authenticate('jwt', {session: false}), (req, res, next) => {

  var code = req.body.params.code
  var form = {
    client_id: config.clientID,
    client_secret: config.clientSecret,
    grant_type: config.grantType,
    redirect_uri:config.redirect_uri,
    code: code
  };

  var contentLength = form.length;
  var requestURL = "https://api.instagram.com/oauth/access_token";
  var headers = {
    'Content-Length': contentLength,
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  request.post({url: requestURL, form: form, headers: headers}, (err, res2, body) => {
    if (err) { console.log(err)}
    else {
      body = JSON.parse(body);

      var accessToken = body.access_token;
      var userID = body.user.id;

      var data = {};
      data.user = body.user;
      data.accessToken = body.access_token;

      User.updateInstagramAuthorizationStatus(req.user._id, data, (err, user) => {
        if(err) {
          console.log("ERROR: " + err);
        }
        else {
          console.log("USER: \n" + user);
        }
      });

      data = JSON.stringify(data);
      res.send(data);
    }
  });
});

// //validates that an access token still works
// function validate(instagramAccessToken) {
//
// }
//validates that a users current token is still viable
router.get('/validate',  passport.authenticate('jwt', {session: false}), (req, res, next) => {
  var userID = req.user.instagram.id;
  var accessToken = "/?access_token="+req.user.instagram.access_token;
  var requestURL = "https://api.instagram.com/v1/users/"+userID+accessToken;
    console.log(requestURL);

    request(requestURL, (err, res2, body) => {
      try {
        body = JSON.parse(body);

        if(body.data.id == req.user.instagram.id){
          res.send("TOKEN STILL VALID");
        }
      }
      catch(error){
        res.send("TOKEN IS INVALID");
      }
    });
});


module.exports = router;
