function coinData(sequelize, DataTypes) {
  
  const table = 'Coin';

  const cols = {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    symbol: { type: DataTypes.STRING, allowNull: false }
  };

  const config = { camelCase: false, timestamps: false, tableName: "Coin" };

  const coin = sequelize.define(table, cols, config);

  coin.associate = function (models) {

    coin.belongsToMany(models.Country,{
      as:"countries",
      through:"Country_Coin",
      foreignKey:"Coin_id",
      otherKey:"Country_id",
      timestamps:false
    });

  };

  return coin;
}

module.exports = coinData;