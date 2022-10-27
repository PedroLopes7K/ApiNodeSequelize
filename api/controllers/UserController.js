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

  static async getUser(req, res) {
    const { id } = req.params
    try {
      const user = await database.Users.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(user)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async insertUser(req, res) {
    const userData = {
      name: req.body.name,
      active: req.body.active,
      email: req.body.email,
      role: req.body.role
    }
    try {
      const user = await database.Users.create(userData)
      return res
        .status(200)
        .json({ msg: 'User created successfuly!', user: user })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updatedUser(req, res) {
    const { id } = req.params
    const infosUpdated = req.body
    try {
      await database.Users.update(infosUpdated, {
        where: {
          id: Number(id)
        }
      })

      const userUpdated = await database.Users.findOne({
        where: {
          id: Number(id)
        }
      })
      return res
        .status(200)
        .json({ msg: 'User updated successfuly!', user: userUpdated })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params
    try {
      await database.Users.destroy({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json({ msg: 'User deleted successfuly!' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = UserController
