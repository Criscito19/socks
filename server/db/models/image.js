'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate({ Sock }) {
      this.hasMany(Sock, { foreignKey: 'imageId' });
    }
  }
  Image.init(
    {
      imgName: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Image',
    }
  );
  return Image;
};
