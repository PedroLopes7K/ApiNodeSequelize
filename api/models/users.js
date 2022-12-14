'use strict'
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      name: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      email: DataTypes.STRING,
      role: DataTypes.STRING
    },
    {}
  )
  Users.associate = function (models) {
    // associations can be defined here
    Users.hasMany(models.Classes, {
      foreignKey: 'teacher_id'
    })
    Users.hasMany(models.Registration, {
      foreignKey: 'student_id'
    })
  }
  return Users
}
