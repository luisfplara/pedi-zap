const mongoose = require("mongoose");

const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    client: [{ type: mongoose.Types.ObjectId, ref: "Client" }],
    restaurant: [{ type: mongoose.Types.ObjectId, ref: "Restaurant" }],
    itens: [
      {
        item: { type: mongoose.Types.ObjectId, ref: "Item" },
        qty: {
          type: Number,
          required: true,
        },
      },
    ],
    payment_method:{
      type: String,
      enum: ['Card', 'Cash']
    },
    pickup_method:{
      type: String,
      enum: ['Delivery', 'Local Pickup']
    },
    total_price: {
      type: Number,
      required: true,
    },
    created: { type: Date, default: Date.now },
  })
);

module.exports = { Order };
