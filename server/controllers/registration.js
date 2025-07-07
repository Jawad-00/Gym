const Registration = require('../models/Registration');

exports.createRegistration = async (req, res) => {
  try {
    const { fullName, email, phone, age, membershipType } = req.body;
    const newReg = new Registration({ fullName, email, phone, age, membershipType });
    await newReg.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
