'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Cart, Like, Sock }) {
      this.hasMany(Cart, { foreignKey: 'userId' });
      this.hasMany(Like, { foreignKey: 'userId' });
      this.hasMany(Sock, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      hashpass: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
