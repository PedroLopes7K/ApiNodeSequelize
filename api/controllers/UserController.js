const database = require('../models')

class UserController {
  // static methods can be used without instantiating the class
  static async getAllUsers(req, res) {
    try {
      const allUsers = await database.Users.findAll()
      return res.status(200).json(allUsers)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UserController
