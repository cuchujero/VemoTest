const bd = require('../database/models'); 

const services = {

    getCoins: (coinId) => {
        return coinId? bd.Coin.findByPk(coinId) : bd.Coin.findAll();
    },
    
    createCoin: async (coinData) => {

        await bd.Coin.create({
            name: coinData.name,
            symbol: coinData.symbol
        });
        
        return {code: 200, message: 'coin created'};
    },

    updateCoin: async (coinData) => {
    
        await bd.Coin.update({
            name: coinData.name,
            symbol: coinData.symbol
        });

        return {code: 200, message: 'coin updated'};
    },

    deleteCoin: async (coinData) => {
        
        await bd.Coin.destroy(
            {where: { id: coinData.id }}
        );

        return {code:200, message: 'coin deleted'};
    }
      
}

module.exports = services;