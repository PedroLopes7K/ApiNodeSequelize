'use strict'
module.exports = (sequelize, DataTypes) => {
  const Classes = sequelize.define(
    'Classes',
    {
      start_data: DataTypes.DATEONLY
    },
    {}
  )
  Classes.associate = function (models) {
    // associations can be defined here
    Classes.hasMany(models.Registration, {
      foreignKey: 'classe_id'
    })
    Classes.belongsTo(models.Level, {
      foreignKey: 'level_id'
    })
    Classes.belongsTo(models.Users, {
      foreignKey: 'teacher_id'
    })
  }
  return Classes
}
