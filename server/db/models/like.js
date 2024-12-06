'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
    static associate({ User, Sock }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Sock, { foreignKey: 'sockId' });
    }
  }
  Like.init(
    {
      userId: DataTypes.INTEGER,
      sockId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Like',
    }
  );
  return Like;
};
