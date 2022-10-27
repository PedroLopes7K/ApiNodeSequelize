const { Router } = require('express')
const LevelController = require('../controllers/LevelController')

const router = Router()
router.get('/levels', LevelController.getAllLevels)
router.get('/levels/:id', LevelController.getLevel)
router.post('/levels', LevelController.insertLevel)
router.put('/levels/:id', LevelController.updatedLevel)
router.delete('/levels/:id', LevelController.deleteLevel)
module.exports = router
