const express = require('express');
const router = express.Router();
const Ctrl = require('./auth.controller');

const { LoginBodyValidator } = require('./auth.validations')

router.post('/login', LoginBodyValidator, Ctrl.Login);

module.exports = router;
