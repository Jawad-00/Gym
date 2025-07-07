const Registration = require('../models/Registration');

// Create new registration (for public and admin)
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

// Get all registrations (admin)
exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find().sort({ registeredAt: -1 });
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Delete a registration (admin)
exports.deleteRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    await Registration.findByIdAndDelete(id);
    res.status(200).json({ message: 'Registration deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
