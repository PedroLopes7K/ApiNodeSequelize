const database = require('../models')

class LevelController {
  static async getAllLevels(req, res) {
    try {
      const allLevels = await database.Levels.findAll()
      return res.status(200).json(allLevels)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async getLevel(req, res) {
    const { id } = req.params
    try {
      const level = await database.Levels.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(level)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async insertLevel(req, res) {
    try {
      const level = await database.Levels.create(req.body)
      return res
        .status(200)
        .json({ msg: 'Level created successfuly!', level: level })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async updatedLevel(req, res) {
    const { id } = req.params
    const infosUpdated = req.body
    try {
      await database.Levels.update(infosUpdated, {
        where: {
          id: Number(id)
        }
      })

      const levelUpdated = await database.Levels.findOne({
        where: {
          id: Number(id)
        }
      })
      return res
        .status(200)
        .json({ msg: 'Level updated successfuly!', level: levelUpdated })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteLevel(req, res) {
    const { id } = req.params
    try {
      await database.Levels.destroy({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json({ msg: 'Level deleted successfuly!' })
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }
}

module.exports = LevelController
