const continentsServices = require('../services/continentsServices'); 

const controller = {
	getContinents: async (req, res)=> {
		res.json(await continentsServices.getContinents(req.params.id));
	},
	createContinent: async (req, res)=> {
		res.json(await continentsServices.createContinent(req.body));
	},
	updateContinent: async (req, res)=> {
		res.json(await continentsServices.updateContinent(req.body));
	},
	deleteContinent: async (req, res)=> {
		res.json(await continentsServices.deleteContinent(req.body));
	},
	
};

module.exports = controller;