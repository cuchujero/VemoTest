const coinsServices = require('../services/coinsServices'); 

const controller = {
	getCoins: async (req, res)=> {
		res.json(await coinsServices.getCoins(req.params.id));
	},
	createCoin: async (req, res)=> {
		res.json(await coinsServices.createCoin(req.body));
	},
	updateCoin: async (req, res)=> {
		res.json(await coinsServices.updateCoin(req.body));
	},
	deleteCoin: async (req, res)=> {
		res.json(await coinsServices.deleteCoin(req.body));
	},
	
};

module.exports = controller;