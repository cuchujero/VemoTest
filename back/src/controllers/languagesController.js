const languagesServices = require('../services/languagesServices'); 

const controller = {
	getLanguages: async (req, res)=> {
		res.json(await languagesServices.getLanguages(req.params.id));
	},
	createLanguage: async (req, res)=> {
		res.json(await languagesServices.createLanguage(req.body));
	},
	updateLanguage: async (req, res)=> {
		res.json(await languagesServices.updateLanguage(req.body));
	},
	deleteLanguage: async (req, res)=> {
		res.json(await languagesServices.deleteLanguage(req.body));
	},
	
};

module.exports = controller;