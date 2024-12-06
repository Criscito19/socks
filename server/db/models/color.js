'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Color extends Model {
    static associate({ Sock }) {
      this.hasMany(Sock, { foreignKey: 'colorId' });
    }
  }
  Color.init(
    {
      baseColor: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Color',
    }
  );
  return Color;
};
