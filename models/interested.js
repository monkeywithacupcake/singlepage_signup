const mongoose = require('mongoose');
const { Schema } = mongoose; // equivalent to const Schema = mongoose.Schema;

const interestedSchema = new Schema({
    email: String, // email will always be a string
    type: String // see Mongoose for options on Schema
});

mongoose.model('interested', interestedSchema);
