const mongoose = require("mongoose");
const Item =require('./dishes.model');

const Menu = mongoose.model(
  "Menu",
  new mongoose.Schema({
    dishes:[{ type: mongoose.Types.ObjectId, ref: 'Dishes' }],

  })
);


module.exports = {Menu} ;

