const Admin = require('../models/admin');



module.exports.addAdmin = function(username, password) {
  let admin = new Admin({
    email: username,
    password: password
  });

  Admin.addAdmin(admin, (err, admin) => {
      if(err){
        console.log(err);
      }
      else {
        console.log("ADMIN SUCCESSFULLY ADD: " + admin);
      }
  });
}
