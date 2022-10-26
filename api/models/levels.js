'use strict';
module.exports = (sequelize, DataTypes) => {
  const Levels = sequelize.define('Levels', {
    level_description: DataTypes.STRING
  }, {});
  Levels.associate = function(models) {
    // associations can be defined here
  };
  return Levels;
};