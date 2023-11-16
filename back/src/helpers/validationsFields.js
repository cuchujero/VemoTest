const {body} = require('express-validator'); 

const countryFieldsValidator = [
  body('name', 'Field can not be empthy').not().isEmpty(),
  body('name', 'Field incorrect').isLength({min: 3},{max: 26}),
  body('capital', 'Field can not be empthy').not().isEmpty(),
  body('capital', 'Field incorrect').isLength({min: 3},{max: 26}),
  body('population', 'Field can not be empthy').not().isEmpty(),
  body('population', 'Field incorrect').isLength({min: 1},{max: 20}),
  body('flagImage', 'Field can not be empthy').not().isEmpty(),
  body('flagImage', 'Field incorrect').isLength({min: 1},{max: 300})
]

const continentFieldsValidator = [
  body('name', 'Field can not be empthy').not().isEmpty(),
  body('name', 'Field incorrect').isLength({min: 3},{max: 26}),
]

const coinFieldsValidator = [
  body('name', 'Field can not be empthy').not().isEmpty(),
  body('name', 'Field incorrect').isLength({min: 3},{max: 26}),
  body('symbol', 'Field can not be empthy').not().isEmpty(),
  body('symbol', 'Field incorrect').isLength({min: 1},{max: 10}),
]

const languageFieldsValidator = [
  body('name', 'Field can not be empthy').not().isEmpty(),
  body('name', 'Field incorrect').isLength({min: 3},{max: 26}),
]

const IdValidator = [
  body('id', 'id can not be empthy').not().isEmpty(),
  body('id', 'Field incorrect').isInt()
]

module.exports = {countryFieldsValidator, continentFieldsValidator, coinFieldsValidator, languageFieldsValidator, IdValidator};
