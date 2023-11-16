const express = require('express');
const router = express.Router();

const coinsController = require('../controllers/coinsController');
const {coinFieldsValidator, IdValidator} = require('../helpers/validationsFields');
const {generalValidation} = require('../middlewares/validationsMw');
const {requestAuthorization} = require('../middlewares/authorizationsMw');

router.get('/:id?', coinsController.getCoins);
router.post('/',  coinFieldsValidator, generalValidation, coinsController.createCoin);
router.put('/', coinFieldsValidator, generalValidation, coinsController.updateCoin);
router.delete('/', IdValidator, generalValidation, coinsController.deleteCoin);

module.exports = router;