const mongoose = require("mongoose");
require("dotenv/config");

const { ReceivedMessage } = require("../../models/message.model");
const { SentMessage } = require("../../models/message.model");
const { Client } = require("../../models/client.model");
const { Dishes } = require("../../models/dishes.model");
const { Menu } = require("../../models/menu.model");
const { Order } = require("../../models/order.model");
const { Restaurant } = require("../../models/restaurant.model");


mongoose.Promise = global.Promise;
const connectionString = process.env.ATLAS_URI || "";
const db = {};

db.mongoose = mongoose;
db.received_message = ReceivedMessage;
db.sent_message = SentMessage;
db.dishes = Dishes;
db.client = Client;
db.menu = Menu;
db.order = Order;
db.restaurant = Restaurant;

db.mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

module.exports = db;
