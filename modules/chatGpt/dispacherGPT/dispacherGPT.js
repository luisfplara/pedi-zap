const OpenAI = require("openai");
const chatGPT = require("../chatGpt");
require("dotenv/config");

let messages = [
  {
    role: "system",
    content:
      "You're operating as the dispatcher for a delivery app's virtual assistant. Your role is to sort incoming messages from users into one of three categories:" +
      "\nInformation: When the message seeks or requests specific information." +
      "\nAction: When the message instructs or requests a particular action." +
      "\nOther: For messages that don't fit into either the information or action categories."+
      "\nrespond with just the name of the category",
  },
];

function dispacherGPT(message) {
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

module.exports = dispacherGPT;
