const db = require("../modules/mongodb/db.js");
const ReceivedMessage = db.received_message;


async function saveReceivedMessage(message) {
  const message_data = new ReceivedMessage(message);
  try {
    let result = await message_data.save();
    res.send(result).status(204);
  } catch (err) {

  }
}


module.exports = saveReceivedMessage;
