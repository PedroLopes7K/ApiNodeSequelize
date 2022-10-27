const database = require('../models')

class ClasseController {
  static async getAllClasses(req, res) {
    try {
      const allClasses = await database.Classes.findAll()
      return res.status(200).json(allClasses)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getClass(req, res) {
    const { id } = req.params
    try {
      const classe = await database.Classes.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(classe)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async insertClass(req, res) {
    try {
      const classe = await database.Classes.create(req.body)
      return res
        .status(200)
        .json({ msg: 'Class created successfuly!', classe: classe })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updatedClass(req, res) {
    const { id } = req.params
    const infosUpdated = req.body
    try {
      await database.Classes.update(infosUpdated, {
        where: {
          id: Number(id)
        }
      })

      const classUpdated = await database.Classes.findOne({
        where: {
          id: Number(id)
        }
      })
      return res
        .status(200)
        .json({ msg: 'Class updated successfuly!', class: classUpdated })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteClass(req, res) {
    const { id } = req.params
    try {
      await database.Classes.destroy({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json({ msg: 'Class deleted successfuly!' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = ClasseController
