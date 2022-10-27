'use strict'
module.exports = (sequelize, DataTypes) => {
  const Registration = sequelize.define(
    'Registration',
    {
      status: DataTypes.STRING
    },
    {}
  )
  Registration.associate = function (models) {
    // associations can be defined here
    Registration.belongsTo(models.Users, {
      foreignKey: 'student_id'
    })
    Registration.belongsTo(models.Classes, {
      foreignKey: 'classe_id'
    })
  }
  return Registration
}
