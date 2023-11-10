const { getRestaurantDetails } = require("../../controllers/restaurant");

const OpenAI = require("openai");
const functionsList = require("../functionsList/functionsList");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const availableFunctions = {
  get_restaurant_info: getRestaurantDetails,
};

async function gptFunctionCaller(responseMessage) {
  const functionName = responseMessage.function_call.name;
  const functionToCall = availableFunctions[functionName];
  const functionArgs = JSON.parse(responseMessage.function_call.arguments);
  const functionResponse = await functionToCall({
    name: functionArgs.name,
    number: functionArgs.number,
    address: functionArgs.address,
    open_schedule: functionArgs.open_schedule,
    menu: functionArgs.menu,
  });

  console.log("-----------------functionArgs");
  console.log(functionArgs);
  console.log("functionArgs--------------------");
  console.log(JSON.stringify(functionResponse));

  const result = {
    role: "function",
    name: functionName,
    content: JSON.stringify(functionResponse),
  };

  return result;
}

async function gptFunctionResolver(messages = []) {
  console.log("checking functions called")

  const lastMsg = messages.length - 1;
  if (messages[lastMsg].function_call) {
    messages = messages.concat(await gptFunctionCaller(messages[lastMsg]));

    const functionResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0,
      max_tokens: 256,

    });
    messages = messages.concat(functionResponse.choices[0].message);
    messages = gptFunctionResolver(messages);
  }
  return messages;
}
module.exports = {
  gptFunctionCaller,
  gptFunctionResolver,
};


/*

      functions: functionsList,
      function_call: "auto",

*/