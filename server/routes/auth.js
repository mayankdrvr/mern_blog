const express = require('express');

const router = express.Router();

// import controller methods
const { login } = require('../controllers/auth');

router.post('/login', login);

module.exports = router;
