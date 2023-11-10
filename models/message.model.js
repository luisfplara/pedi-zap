const { Mixed } = require("mongoose");
const mongoose = require("mongoose");

const ReceivedMessage = mongoose.model(
  "ReceivedMessage",
  new mongoose.Schema({
    id: {
      type: String
    },
    body: {
      type: String
    },
    type: {
      type: String
    },
    t: {
      type: Number
    },
    notifyName: {
      type: String
    },
    from: {
      type: String
    },
    to: {
      type: String
    },
    self: {
      type: String
    },
    ack: {
      type: Number
    },
    invis: {
      type: Boolean
    },
    isNewMsg: {
      type: Boolean
    },
    star: {
      type: Boolean
    },
    kicNotified: {
      type: Boolean
    },
    recvFresh: {
      type: Boolean
    },
    isFromTemplate: {
      type: Boolean
    },
    pollInvalidated: {
      type: Boolean
    },
    isSentCagPollCreation: {
      type: Boolean
    },
    latestEditMsgKey: {
      type: Mixed
    },
    latestEditSenderTimestampMs: {
      type: Mixed
    },
    mentionedJidList: {
      type: Array
    },
    groupMentions: {
      type: Array
    },
    isVcardOverMmsDocument: {
      type: Boolean
    },
    isForwarded: {
      type: Boolean
    },
    labels: {
      type: Array
    },
    hasReaction: {
      type: Boolean
    },
    productHeaderImageRejected: {
      type: Boolean
    },
    lastPlaybackProgress: {
      type: Number
    },
    isDynamicReplyButtonsMsg: {
      type: Boolean
    },
    isMdHistoryMsg: {
      type: Boolean
    },
    stickerSentTs: {
      type: Number
    },
    isAvatar: {
      type: Boolean
    },
    lastUpdateFromServerTs: {
      type: Number
    },
    requiresDirectConnection: {
      type: Mixed
    },
    invokedBotWid: {
      type: Mixed
    },
    chatId: {
      type: String
    },
    fromMe: {
      type: Boolean
    },
    sender: {
      id: {
        type: String
      },
      pushname: {
        type: String
      },
      type: {
        type: String
      },
      isBusiness: {
        type: Boolean
      },
      isEnterprise: {
        type: Boolean
      },
      isSmb: {
        type: Boolean
      },
      labels: {
        type: Array
      },
      formattedName: {
        type: String
      },
      isMe: {
        type: Boolean
      },
      isMyContact: {
        type: Boolean
      },
      isPSA: {
        type: Boolean
      },
      isUser: {
        type: Boolean
      },
      isWAContact: {
        type: Boolean
      },
      profilePicThumbObj: {
        eurl: {
          type: String
        },
        id: {
          type: String
        },
        img: {
          type: String
        },
        imgFull: {
          type: String
        },
        tag: {
          type: String
        }
      },
      msgs: {
        type: Mixed
      }
    },
    timestamp: {
      type: Number
    },
    content: {
      type: String
    },
    isGroupMsg: {
      type: Boolean
    },
    mediaData: {}
  })
);

const SentMessage = mongoose.model(
  "SentMessage",
  new mongoose.Schema({
    id: {
      type: String
    },
    body: {
      type: String
    },
    type: {
      type: String
    },
    subtype: {
      type: Mixed
    },
    t: {
      type: Number
    },
    from: {
      type: String
    },
    to: {
      type: String
    },
    self: {
      type: String
    },
    ack: {
      type: Number
    },
    isNewMsg: {
      type: Boolean
    },
    star: {
      type: Boolean
    },
    kicNotified: {
      type: Boolean
    },
    isFromTemplate: {
      type: Boolean
    },
    pollInvalidated: {
      type: Boolean
    },
    isSentCagPollCreation: {
      type: Boolean
    },
    latestEditMsgKey: {
      type: Mixed
    },
    latestEditSenderTimestampMs: {
      type: Mixed
    },
    mentionedJidList: {
      type: Array
    },
    groupMentions: {
      type: Array
    },
    urlText: {
      type: Mixed
    },
    urlNumber: {
      type: Mixed
    },
    isVcardOverMmsDocument: {
      type: Boolean
    },
    isForwarded: {
      type: Boolean
    },
    labels: {
      type: Array
    },
    hasReaction: {
      type: Boolean
    },
    ephemeralStartTimestamp: {
      type: Number
    },
    productHeaderImageRejected: {
      type: Boolean
    },
    lastPlaybackProgress: {
      type: Number
    },
    isDynamicReplyButtonsMsg: {
      type: Boolean
    },
    isMdHistoryMsg: {
      type: Boolean
    },
    stickerSentTs: {
      type: Number
    },
    isAvatar: {
      type: Boolean
    },
    lastUpdateFromServerTs: {
      type: Number
    },
    requiresDirectConnection: {
      type: Boolean
    },
    invokedBotWid: {
      type: Mixed
    },
    chatId: {
      type: String
    },
    fromMe: {
      type: Boolean
    },
    sender: {
      id: {
        type: String
      },
      type: {
        type: String
      },
      isBusiness: {
        type: Boolean
      },
      isEnterprise: {
        type: Boolean
      },
      isSmb: {
        type: Boolean
      },
      labels: {
        type: Array
      },
      forcedBusinessUpdateFromServer: {
        type: Boolean
      },
      formattedName: {
        type: String
      },
      isMe: {
        type: Boolean
      },
      isMyContact: {
        type: Boolean
      },
      isPSA: {
        type: Boolean
      },
      isUser: {
        type: Boolean
      },
      isWAContact: {
        type: Boolean
      },
      profilePicThumbObj: {
        type: Mixed
      },
      msgs: {
        type: Mixed
      }
    },
    timestamp: {
      type: Number
    },
    content: {
      type: String
    },
    isGroupMsg: {
      type: Boolean
    },
    mediaData: {}
  })
);

module.exports = {ReceivedMessage,SentMessage} ;

