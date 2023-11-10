const db = require("../modules/mongodb/db.js");
const SentMessage = db.sent_message;


async function saveSentMessage(message) {
  const message_data = new SentMessage(message);
  try {
    let result = await message_data.save();
    res.send(result).status(204);
  } catch (err) {

  }
}


module.exports = saveSentMessage;
