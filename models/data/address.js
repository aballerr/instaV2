/*The purpose of this class is to generate large amounts of user data.  It is only useful in
development and has no actual use in development.  
 */


module.exports.address = {
  "hello there":"hi",
  "me":"bye"
};


//got address from https://fakena.me/random-real-address/
var addresses = [
"289 Hildred Dr, Burlington, VT 05401-3788",
"9760 Isabelle Rd,Lafayette, CO 80026-9104",
"2464 Highland Rd, Upland, CA 91784-1178",
"4699 Murphy Canyon Rd, San Diego, CA 92123-4320",
"1300 S Owyhee St, Boise, ID 83705-6011",
"1844 S Alvernon Way, Tucson, AZ 85711-5607",
"2014 Tulare St, Fresno, CA 93721-2011",
"6023 S Datura St, Littleton, CO 80120-2635",
"2801 Evans Ave, Valparaiso, IN 46383-6940",
"3224 Yorba Linda Linda Blvd, Fullerton, CA 92831-0000",
"1628 Wynsam St, Philadelphia, PA 19138-1611"
];




//for development purposes only
module.exports.getRandomuserData = function() {
  var users = [];
  for(var i in addresses){
    var user = {};
    user.email = "alex@"+i+".com";
    user.password = "123456";
    user.address = addresses[i];
    user.instagram_verified = false;
    users.push(user);
  }

  return users;
}
