function continentData(sequelize, DataTypes) {
  
    const table = 'Continent';
  
    const cols = {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false }
    };
  
    const config = { camelCase: false, timestamps: false, tableName: "Continent" };
  
    const continent = sequelize.define(table, cols, config);
  
    continent.associate = function (models) {

      continent.hasMany(models.Country, {   
        as: "countries",
        foreignKey: "Continent_id"
      });

    };
  
    return continent;
  }
  
  module.exports = continentData;