function countryData(sequelize, DataTypes) {
  
    const table = 'Country';
  
    const cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      capital: { type: DataTypes.STRING, allowNull: false },
      population: { type: DataTypes.STRING, allowNull: false },
      flagImage: { type: DataTypes.STRING, allowNull: false },
      Continent_id: { type: DataTypes.INTEGER, allowNull: false }
    };
  
    const config = { camelCase: false, timestamps: false, tableName: "Country" };
  
    const country = sequelize.define(table, cols, config);
  
    country.associate = function (models) {

    country.belongsToMany(models.Language,{
      as:"languages",
      through:"Country_Language",
      foreignKey:"Country_id",
      otherKey:"Language_id",
      timestamps:false
    });

    country.belongsToMany(models.Coin,{
      as:"coins",
      through:"Country_Coin",
      foreignKey:"Country_id",
      otherKey:"Coin_id",
      timestamps:false
    });

    country.belongsTo(models.Continent, {   
      as: "continents",
      foreignKey: "Continent_id"
    });
  
  }

  return country;
}

module.exports = countryData;