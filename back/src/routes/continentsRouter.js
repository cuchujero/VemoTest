const express = require('express');
const router = express.Router();

const continentsController = require('../controllers/continentsController');
const {continentFieldsValidator, IdValidator} = require('../helpers/validationsFields');
const {generalValidation} = require('../middlewares/validationsMw');
const {requestAuthorization} = require('../middlewares/authorizationsMw');

router.get('/:id?', continentsController.getContinents);
router.post('/',  continentFieldsValidator, generalValidation, continentsController.createContinent);
router.put('/', continentFieldsValidator, generalValidation, continentsController.updateContinent);
router.delete('/', IdValidator, generalValidation, continentsController.deleteContinent);

module.exports = router;