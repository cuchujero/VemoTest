const express = require('express');
const router = express.Router();

const countriesController = require('../controllers/countriesController');
const {countryFieldsValidator, IdValidator} = require('../helpers/validationsFields');
const {generalValidation} = require('../middlewares/validationsMw');
const {requestAuthorization} = require('../middlewares/authorizationsMw');

router.get('/:id?', countriesController.getCountries);
router.post('/',  countryFieldsValidator, generalValidation, countriesController.createCountry);
router.put('/', countryFieldsValidator, generalValidation, countriesController.updateCountry);
router.delete('/', IdValidator, generalValidation, countriesController.deleteCountry);

module.exports = router;