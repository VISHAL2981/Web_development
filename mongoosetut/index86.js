
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vishalkart', { useNewUrlParser: true, useUnifiedTopology: true });


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!

    console.log("vishal is here")
});

var kittySchema = new mongoose.Schema({
    name: String
});


kittySchema.methods.speak = function () {
    var greeting = "my name is" + this.name;
    console.log(greeting);
}

var Kitten = mongoose.model('vishalkitty', kittySchema);


var vishalkitty = new Kitten({ name: 'vishalkitty' });
var vishalkitty2 = new Kitten({ name: 'vishalkitty2' });

console.log(vishalkitty.name);
vishalkitty.speak();

vishalkitty.save(function (err, vishalkitty) {
if (err) return console.error(err);
    vishalkitty.speak();
})
vishalkitty2.save(function (err, k) {
if (err) return console.error(err);
    k.speak();
})

Kitten.find({name:"vishalkitty2"},function (err, kitten) {
    if (err) return console.error(err);
    console.log(kittens);
  })