const bd = require('../database/models'); 

const services = {

    getContinents: (continentId) => {
        return continentId? bd.Continent.findByPk(continentId) : bd.Continent.findAll();
    },
    
    createContinent: async (continentData) => {

        await bd.Continent.create({
            name: continentData.name
        });
        
        return {code: 200, message: 'continent created'};
    },

    updateContinent: async (continentData) => {
    
        await bd.Continent.update({
            name: continentData.name
        });

        return {code: 200, message: 'continent updated'};
    },

    deleteContinent: async (continentData) => {
        
        await bd.Continent.destroy(
            {where: { id: continentData.id }}
        );

        return {code:200, message: 'continent deleted'};
    }
      
}

module.exports = services;