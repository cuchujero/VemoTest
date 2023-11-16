function languageData(sequelize, DataTypes) {
  
  const table = 'Language';

  const cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false }
  };

  const config = { camelCase: false, timestamps: false, tableName: "Language" };

  const language = sequelize.define(table, cols, config);

  language.associate = function (models) {

    language.belongsToMany(models.Country,{
      as:"countries",
      through:"Country_Language",
      foreignKey:"Language_id",
      otherKey:"Country_id",
      timestamps:false
    });

  };

  return language;
}

module.exports = languageData;