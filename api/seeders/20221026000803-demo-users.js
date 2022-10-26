'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          active: true,
          email: 'jon@gmail.com',
          role: 'student',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: 'Pedro Lopes',
          active: false,
          email: 'lopes@gmail.com',
          role: 'student',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: 'Rodrigo',
          active: false,
          email: 'roro@gmail.com',
          role: 'teacher',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          name: 'Amanda lura',
          active: true,
          email: 'mandinha@gmail.com',
          role: 'teacher',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
}
