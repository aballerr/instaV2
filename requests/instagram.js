const request = require('request');


//Builds an instagram query URL
function urlBuilder(accessToken, requestType, userID) {
  const requestTypeURL = '';
  const baseURL = "https://api.instagram.com/v1/users/";
  const accessTokenURL = "?access_token=";

  switch(requestType) {
    case "user": requestURL = '/';
    break;
    default: requestURL = '/media/recent';
  }

  return baseURL + userID + requestURL + accessTokenURL +accessToken;
}


//get and store some basic information about the instagram user
module.exports.userRequestData = function(accessToken, requestType, userID, user, callback){
  var requestURL = urlBuilder(accessToken, requestType, userID);

  request(requestURL, (err, res, body) => {
    body = JSON.parse(body);
    user.instagram.followed_by = body.data.counts.followed_by;
    user.save(callback);
  });
}

//get and store the recent images for a user
module.exports.userRequestRecentImages = function(accessToken, requestType, userID, user, callback) {
  var requestURL = urlBuilder(accessToken, requestType, userID);

  request(requestURL, (err, res, body) => {
      var pictures = [];
      body = JSON.parse(body);

      //console.log(body.data[0].images.standard_resolution.url);
      for(var i in body.data) {
        pictures.push(body.data[i].images.standard_resolution.url);
      }
      user.instagram.pictures = pictures;
      user.save(callback);
  });
}


// var requestURL ="https://api.instagram.com/v1/users/"+userInfo.id+"/?access_token="+data.accessToken;
// request(requestURL, (err, res, body) => {
//   body = JSON.parse(body);
//
//
//   user.instagram.followed_by = body.data.counts.followed_by;
//
//
//     user.save(callback);
// });
