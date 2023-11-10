const mongoose = require("mongoose");

const Dishes = mongoose.model(
  "Dishes",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    descriptiom: {
      type: String,
      required: true,
    },
    images:[],
  })
);

module.exports = { Dishes };
