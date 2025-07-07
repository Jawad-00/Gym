const Message = require('../models/message');

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message received' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
