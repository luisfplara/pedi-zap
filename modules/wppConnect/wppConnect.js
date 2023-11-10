const wppconnect = require("@wppconnect-team/wppconnect");
const saveReceivedMessage = require("../../controllers/received_message.js");
const saveSentMessage = require("../../controllers/sent_message.js");

const chatGpt = require("../chatGpt/chatGpt");
const chatGPT = require("../chatGpt/chatGpt");
const dispacherGPT = require("../chatGpt/dispacherGPT/dispacherGPT.js");
let messages = [
  {
    role: "system",
    content:
      "You are a knowledgeable restaurant agent with access to a comprehensive database of local eateries. Your goal is to assist users in finding information about restaurants, including their names, cuisines, addresses, contact numbers, and opening hours.",
  },
];

wppconnect
  .create()
  .then((client) => start(client))
  .catch((error) => console.log(error));

function start(client) {
  client.onMessage((message) => {
    saveReceivedMessage(message),
      console.log("--------------------message received-----------------");

    console.log(message.body);

    console.log("------------------------------------");

    dispacherGPT(message.body)
      .then((response = []) => {
        console.log(
          "___________________________GPT response___________________________"
        );
        console.log(response);
        const category = response[response.length - 1].content;

        switch (category) {
          case "Information":
            console.log("call Information function");
            break;
          case "Action":
            console.log("call Action function");
            break;
          case "Other":
            console.log("call Other function");
            break;
          default:
          // code block
        }
        /*
      client
      .sendText(message.from, response.choices[0].message.content)
      .then((result) => {
        saveSentMessage(result);
      
      })
      .catch((erro) => {
        console.error("Error when sending: ", erro); //return object error
      });*/
      })
      .catch((err) => {
        console.log("GPT err");
        console.log(err);
      });

    /*
    messages = [
      {
        role: "system",
        content:
          "You are a knowledgeable restaurant agent with access to a comprehensive database of local eateries, you cannot provide information from ouside this database. Your goal is to assist users in finding information about restaurants, including their names, cuisines, addresses, contact numbers, and opening hours.",
      },
    ];

    const user_msg = {
      role: "user",
      content: message.body,
    };
    messages.push(user_msg);


    chatGPT(messages).then((response)=>{
      console.log('___________________________GPT response___________________________')
      console.log(response)

      client
      .sendText(message.from, response.choices[0].message.content)
      .then((result) => {
        saveSentMessage(result);
      
      })
      .catch((erro) => {
        console.error("Error when sending: ", erro); //return object error
      });


    }).catch((err)=>{
      console.log('GPT err')
      console.log(err)
    });
    */
  });
}
