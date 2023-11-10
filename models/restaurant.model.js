const mongoose = require("mongoose");

const Restaurant = mongoose.model(
  "Restaurant",
  new mongoose.Schema({
    name:{
        type: String,
        required: true

    },
    number:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true

    },
    open_schedule:{
        type: String,
        required: true

    },
    menu :[{ type: mongoose.Types.ObjectId, ref: 'Menu' }]

  })
);


module.exports = {Restaurant} ;

