const OpenAI = require("openai");
require("dotenv/config");

const functionList = require("../functionsList/functionsList");
const { gptFunctionResolver } = require("./functionsGpt");


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

function chatGPT(messages = [], functions_conf) {
  return new Promise((resolve, reject) => {
    openai.chat.completions
      .create({
        model: "gpt-3.5-turbo",
        messages: messages,
        temperature: 0,
        max_tokens: 256,
        ...functions_conf,
      })
      .then(async (resp) => {
        messages = messages.concat(resp.choices[0].message);
        const responseGPT = await gptFunctionResolver(messages);

        resolve(responseGPT);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = chatGPT;
