const bd = require('../database/models'); 

const services = {

    getLanguages: (languageId) => {
        return languageId? bd.Language.findByPk(languageId) : bd.Language.findAll();
    },
    
    createLanguage: async (languageData) => {

        await bd.Language.create({
            name: languageData.name
        });
        
        return {code: 200, message: 'language created'};
    },

    updateLanguage: async (languageData) => {
    
        await bd.Language.update({
            name: languageData.name
        });

        return {code: 200, message: 'language updated'};
    },

    deleteLanguage: async (languageData) => {
        
        await bd.Language.destroy(
            {where: { id: languageData.id }}
        );

        return {code:200, message: 'language deleted'};
    }
      
}

module.exports = services;