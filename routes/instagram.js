const express = require('express');
const router = express.Router();
const passport = require('passport');
const request = require('request');
const config = require('../config/instagram');


//
router.get('/authenticate', (req, res, next) => {
  var requestURL = 'https://api.instagram.com/oauth/authorize/?client_id='+config.clientID+'&redirect_uri='+config.redirect_uri+'&response_type=code'+config.scope;
  res.redirect(requestURL);
});

router.post('/token', (req, res) => {
  var code = req.body.params.code//req.query["code"];
  console.log("CODE IS: " + code);
  console.log(req.body);
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

  // request.post({url: requestURL, form: form, headers: headers}, (err, res2, body) => {
  //   if (err) { console.log(err)}
  //   else {
  //     body = JSON.parse(body);
  //   //  console.log(body);
  //     var accessToken = body.access_token;
  //     var userID = body.user.id;
  //     //console.log(body.user.id);
  //     let newUser = new User({
  //       full_name: body.user.full_name,
  //       user_id: body.user.id,
  //       username: body.user.username,
  //       recentImages: []
  //     });
  //
  //
  //
  //     User.getUserById(newUser.user_id, (err, user) => {
  //       if(!user) {
  //         var requestURL = "https://api.instagram.com/v1/users/self/media/recent/?access_token="+accessToken;
  //         console.log("**********************************************");
  //
  //         request(requestURL, (err, res2, body) => {
  //           body = JSON.parse(body);
  //           var data = [];
  //           for(var i in body.data){
  //             var image = body.data[i].images.standard_resolution.url;
  //             if(image) {
  //               data.push(image)
  //             }
  //           }
  //           newUser.recentImages = data;
  //
  //           User.addUser(newUser, (err, user) => {
  //             if(err) {
  //               console.log(err)
  //             } else {
  //               console.log("success");
  //             }
  //           });
  //         });
  //       }
  //       else {
  //         console.log("User: " + user);
  //       }
  //     });
  //   }
  //
  //   var data = {};
  //   data.user = body.user;
  //   data.accessToken = body.access_token;
  //
  //   res.send(data);
  // });
  res.send('yo mama');
});



module.exports = router;
