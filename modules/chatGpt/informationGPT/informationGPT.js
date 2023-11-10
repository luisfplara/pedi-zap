const OpenAI = require("openai");
const chatGPT = require("../chatGpt");
require("dotenv/config");

let messages = [
  {
    role: "system",
    content:
      "As a virtual assistant for a delivery app, your primary function is to provide information about restaurants and their menus. You have access to a database containing relevant data, and your responses are based solely on the information available in this database."
  },
];
const infomationFunction ={     
    functions: functionsList,
    function_call: "auto",
}
function informationGPT(message) {
  return new Promise((resolve, reject) => {
    const user_msg = {
      role: "user",
      content: message,
    };
    messages.push(user_msg);

    chatGPT(messages)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        console.log("GPT err");
        console.log(err);
        reject(err)
      });
  });
}

module.exports = informationGPT;
