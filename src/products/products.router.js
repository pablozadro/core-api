const express = require('express');
const router = express.Router();
const Ctrl = require('./products.controller');


router.get('/', Ctrl.GetAllProducts);


module.exports = router;
