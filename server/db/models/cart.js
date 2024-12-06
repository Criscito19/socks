'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    static associate({ User, Sock }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Sock, { foreignKey: 'sockId' });
    }
  }
  Cart.init(
    {
      userId: DataTypes.INTEGER,
      sockId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Cart',
    }
  );
  return Cart;
};
