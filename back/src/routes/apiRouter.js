
const express = require('express');
const router = express.Router();
const countriesRouter = require('./countriesRouter'); 
const coinsRouter = require('./coinsRouter'); 
const languagesRouter = require('./languagesRouter'); 
const continentsRouter = require('./continentsRouter'); 

router.use('/countries', countriesRouter); 
router.use('/coins', coinsRouter); 
router.use('/languages', languagesRouter);
router.use('/continents', continentsRouter);  

module.exports = router;
