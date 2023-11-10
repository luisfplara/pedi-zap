const mongoose = require("mongoose");

const Client = mongoose.model(
  "Client",
  new mongoose.Schema({
    name:{
        type: String,
        required: true

    },
    number:{
        type: Number,
        required: true
    },

  })
);


module.exports = {Client} ;

