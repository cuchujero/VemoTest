const express = require('express');
const router = express.Router();

const languagesController = require('../controllers/languagesController');
const {languageFieldsValidator, IdValidator} = require('../helpers/validationsFields');
const {generalValidation} = require('../middlewares/validationsMw');
const {requestAuthorization} = require('../middlewares/authorizationsMw');

router.get('/:id?', languagesController.getLanguages);
router.post('/',  languageFieldsValidator, generalValidation, languagesController.createLanguage);
router.put('/', languageFieldsValidator, generalValidation, languagesController.updateLanguage);
router.delete('/', IdValidator, generalValidation, languagesController.deleteLanguage);

module.exports = router;