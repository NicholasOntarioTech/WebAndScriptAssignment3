let mongoose = require("mongoose");

// Create a model

let gigModel = mongoose.Schema(
    {
    performer: String,
    description: String,
    date: String,
    time: String,
    duration: Number,
    price: Number
    }, 
    {
        collection:"gigs"
    }
);
module.exports=mongoose.model('gig',gigModel);