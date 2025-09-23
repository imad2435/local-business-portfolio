// local-business-portfolio/backend/models/messageModel.js

const mongoose = require("mongoose");

// FIX: Schema name typo
const messageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please provide your name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "please provide your email"],
      trim: true,
    },
    // FIX: Added message field
    message: {
      type: String,
      required: [true, "please provide a message"],
    },
    isRead: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

// FIX: Use module.exports
module.exports = Message;