const mongoose = require("mongoose");
const db = require("../modules/mongodb/db");
const Restaurant = db.restaurant;

// Assuming you have already defined the Restaurant model

async function getRestaurantDetails(
  input
) {

    let query={}
    input.name?query.name=input.name:null;
    input.number?query.number=input.number:null;
    input.address?query.address=input.address:null;
    input.open_schedule?query.open_schedule=input.open_schedule:null;
    input.menu?query.menu=input.menu:null;

  try {
    const restaurant = await Restaurant.find(query).populate({
        path: 'menu',
        // Get friends of friends - populate the 'friends' array for every friend
        populate: { path: 'dishes' }
    });;
    return restaurant;
  } catch (error) {
    throw new Error(`Error fetching restaurant details: ${error}`);
  }
}

async function createRestaurant(data) {
  try {
    const restaurant = await Restaurant.create(data);
    return restaurant;
  } catch (error) {
    throw new Error(`Error creating restaurant: ${error.message}`);
  }
}

async function updateRestaurant(restaurantId, updateData) {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      restaurantId,
      updateData,
      { new: true }
    ).populate("menu");
    return restaurant;
  } catch (error) {
    throw new Error(`Error updating restaurant: ${error.message}`);
  }
}

async function deleteRestaurant(restaurantId) {
  try {
    const restaurant = await Restaurant.findByIdAndDelete(restaurantId);
    return restaurant;
  } catch (error) {
    throw new Error(`Error deleting restaurant: ${error.message}`);
  }
}

module.exports = {
  getRestaurantDetails,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
