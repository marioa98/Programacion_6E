const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://test89:test89@ds251632.mlab.com:51632/addressbookaz');

let schema = mongoose.Schema;

let PersonSchema = new schema ({
    firstName : String,
    lastName : String,
    address : String
});


let Person = mongoose.model('Person', PersonSchema);

let john = Person({
    firstName : 'Mario',
    lastName : 'Martinez',
    address : '555 Main St.'
});

john.save(function (err) {
    if(err) throw err;
    
    console.log('Person saved');    
})

