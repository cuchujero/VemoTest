const countriesServices = require('../services/countriesServices'); 

const controller = {
	getCountries: async (req, res)=> {
		res.json(await countriesServices.getCountries(req.params.id));
	},
	createCountry: async (req, res)=> {
		res.json(await countriesServices.createCountry(req.body));
	},
	updateCountry: async (req, res)=> {
		res.json(await countriesServices.updateCountry(req.body));
	},
	deleteCountry: async (req, res)=> {
		res.json(await countriesServices.deleteCountry(req.body));
	},
	
};

module.exports = controller;