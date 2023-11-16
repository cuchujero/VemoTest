const bd = require('../database/models'); 

const services = {

    getCountries: (countryId) => {
        return countryId? bd.Country.findByPk(countryId) : bd.Country.findAll();
    },
    
    createCountry: async (countryData) => {

        await bd.Country.create({
            name: countryData.name,
            capital: countryData.capital,
            population: countryData.population,
            flagImage: countryData.flagImage,
            Continent_id: countryData.Continent_id
        });
        
        return {code: 200, message: 'country created'};
    },

    updateCountry: async (countryData) => {
    
        await bd.Country.update({
            name: countryData.name,
            capital: countryData.capital,
            population: countryData.population,
            flagImage: countryData.flagImage,
            Continent_id: countryData.Continent_id
        });

          return {code: 200, message: 'country updated'};
    },

    deleteCountry: async (countryData) => {
        await bd.Country.destroy(
            {where: { id: countryData.id }}
        );

        return {code:200, message: 'country deleted'};
    }
      
}

module.exports = services;