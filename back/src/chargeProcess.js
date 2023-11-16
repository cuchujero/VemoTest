const axios = require('axios');
const bd = require('./database/models'); 

async function chargeData(){
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countries = response.data;
        for (const country of countries) {

          if (country && typeof country === 'object') {

            const { name, capital, population, flags, continents, languages, currencies } = country;
      
            let continentName="No information";

            if (continents){
              continentName = continents.length > 0 ? continents[0] : 'No information';
            }

            const [continent] = await bd.Continent.findOrCreate({
              where: { name: continentName },
            });

            let capitalName="No information";
      
            if (capital){
              capitalName = capital.length > 0 ? capital[0] : 'No information';
            }

            let flagImage="No information";
      
            if (flags){
              flagImage = flags.png? flags.png : 'No information';
            }

            const [dbCountry, created] = await bd.Country.findOrCreate({
              where: { name: name.common },
              defaults: {
                capital: capitalName,
                population: population.toString(),
                flagImage: flagImage,
                Continent_id: continent.id
              },
            });

            if (languages && typeof languages === 'object') {
              const languageEntries = Object.entries(languages);
              if (languageEntries){
                for (const [code, name] of languageEntries) {
                  if (name){
                    const [dbLanguage] = await bd.Language.findOrCreate({
                      where: { name },
                    });
                    await dbCountry.addLanguage(dbLanguage);
                  }
                }
             }
            }

            if (currencies && typeof currencies === 'object') {
              for (const [code, currencyData] of Object.entries(currencies)) {
                if (currencyData){
                  const name = currencyData.name? currencyData.name : 'No information';
                  const symbol = currencyData.symbol? currencyData.symbol : 'No information';
                  const [dbCoin] = await bd.Coin.findOrCreate({
                  where: { name, symbol },
                });
                await dbCountry.addCoin(dbCoin);
              }
              }
            }

          }
        }
        
        console.log('Data charged');
      } catch (error) {
        console.error('Api error:', error.message);
      }
}

module.exports = {chargeData}