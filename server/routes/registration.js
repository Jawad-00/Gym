const express = require('express');
const router = express.Router();
const { createRegistration } = require('../controllers/registration');

router.post('/createRegistration', createRegistration);

module.exports = router;
