const express = require('express');
const router = express.Router();
const {
  createRegistration,
  getAllRegistrations,
  deleteRegistration
} = require('../controllers/registration');

router.post('/', createRegistration);              // Public/user registration
router.get('/admin', getAllRegistrations);         // Admin - view all
router.delete('/admin/:id', deleteRegistration);   // Admin - delete by ID

module.exports = router;
