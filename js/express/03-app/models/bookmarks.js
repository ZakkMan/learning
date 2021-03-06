'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bookmarks = sequelize.define('Bookmarks', {
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Bookmarks;
};