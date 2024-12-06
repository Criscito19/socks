'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    static associate({ Cart, Like, Color, Image, User }) {
      this.hasMany(Cart, { foreignKey: 'sockId' });
      this.hasMany(Like, { foreignKey: 'sockId' });
      this.belongsTo(Color, { foreignKey: 'colorId' });
      this.belongsTo(Image, { foreignKey: 'imageId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Sock.init(
    {
      userId: DataTypes.INTEGER,
      colorId: DataTypes.INTEGER,
      imageId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Sock',
    }
  );
  return Sock;
};
