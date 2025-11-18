let mongoose = require("mongoose");

// Create a model

let gigModel = mongoose.Schema( //Creates the model for each object, establishing variables for each gig
    {
    performer: String,
    description: String,
    date: String,
    time: String,
    duration: Number,
    price: Number
    }, 
    {
        collection:"gigs" //Collection is "gigs", which can be seen on the mongoDB
    }
);
module.exports=mongoose.model('gig',gigModel);