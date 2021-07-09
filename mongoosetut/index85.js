//getting started.js 
//this is connectio0n making string


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vishalkart', {useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!

  console.log("vishal is here")
});