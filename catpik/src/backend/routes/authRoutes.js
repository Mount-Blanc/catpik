// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

// Define your routes
router.post('/register', authController.postRegister);
router.get('/logout', authController.logout);
router.post('/login', authController.login);

// Export the router
module.exports = router;
