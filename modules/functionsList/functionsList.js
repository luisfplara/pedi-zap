const get_restaurant_info = {
  name: "get_restaurant_info",
  description: "Get information about one or more restaurant especified in a database",
  parameters: {
    type: "object",
    properties: {
      name: {
        type: "string",
        description: "The name of the restaurant",
      },
      number: {
        type: "integer",
        description: "The contact number of the restaurant",
      },
      address: {
        type: "string",
        description: "The address of the restaurant",
      },
      open_schedule: {
        type: "string",
        description: "The opening hours of the restaurant",
      },
      menu: {
        type: "array",
        items: {
          type: "object",
          description: "The infomation about each menu served by the restaurant",
        },
        description: "The list of menus served by the restaurant, a restaurant can have more than on menu for a specific time",
      },
    },
    required: ["location"],
  },
};

module.exports = [get_restaurant_info];
