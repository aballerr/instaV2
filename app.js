const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const addAdmin = require('./miscellaneous/admin');


//addAdmin.addAdmin("alex", "123");


mongoose.connect(config.database, {
  useMongoClient: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to database' + config.database);
});

mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});

const app = express();
const users = require('./routes/users');
const instagram = require('./routes/instagram');
const admin = require('./routes/admin');
const google = require('./routes/google');
const user = require('./models/user');



app.use(express.static(path.join(__dirname, 'public')));

// Port Number
const port = 3000;

app.use(cors());

// Body Parser
app.use(bodyParser.json());


// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport);
require('./config/passport').adminStrategy(passport);

//routes
app.use('/users', users);
app.use('/instagram', instagram);
app.use('/google', google);
app.use('/admin', admin);

app.get('*', (req, res) => {

  res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});
