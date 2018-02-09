const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/interested');   // let the user model be avail - needs to be before passport
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, function(err) {
  if(err) {
    console.log('connection error', err);
  }
  else {
    console.log('connection with database successful');
  }
});
mongoose.set("debug", true);

const app = express(); // calling express() creates a new express app
app.use(bodyParser.json()); // will parse
require('./routes/signupRoutes')(app); // calling the function in signupRoutes

if (process.env.NODE_ENV === 'production') {
  // this isn't my express route
  app.use(express.static('client/build')); // look in client/build to match
  // can't find it in route
  const path = require('path'); // use this to build a path
  app.get('*', (req, res) => {  // can't find it..route to client/build/index.html
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// identify what port to pay attention to
const PORT = process.env.PORT || 5000; // get the port from heroku
app.listen(PORT);
