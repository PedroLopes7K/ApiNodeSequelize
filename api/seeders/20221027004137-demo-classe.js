'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Classes',
      [
        {
          start_data: '2022-10-12',
          level_id: 1,
          teacher_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          start_data: '2022-1-2',
          level_id: 2,
          teacher_id: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Classes', null, {})
  }
}
