const mongoose = require('mongoose');

const reviewsSchema = new mongoose.Schema({
    name: String,
    comment: String,
    rating: Number

});

const Reviews = mongoose.model('Reviews', reviewsSchema);

 
module.exports = Reviews;
