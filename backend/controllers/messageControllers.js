// local-business-portfolio/backend/controllers/messageControllers.js

const Message = require("../models/messageModel.js");

const createMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // FIX: Use || for checking multiple conditions
    if (!name || !email || !message) {
      return res.status(400).json({
        message: "please fill out the all fields",
      });
    }
    const newMessage = new Message({
      name,
      email,
      message,
    });

    await newMessage.save();

    res.status(200).json({
      message: "Message sent successfully! We will get back to you soon",
    });
  } catch (error) {
    res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }
};

const getMessage = async (req, res) => {
  try {
    const messages = await Message.find({}).sort({
      createdAt: -1,
    });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({
      message: "server error",
      error: error.message,
    });
  }
};

// FIX: Use module.exports
module.exports = { createMessage, getMessage };