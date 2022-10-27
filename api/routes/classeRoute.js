const { Router } = require('express')
const ClasseController = require('../controllers/ClasseController')

const router = Router()
router.get('/classes', ClasseController.getAllClasses)
router.get('/classes/:id', ClasseController.getClass)
router.post('/classes', ClasseController.insertClass)
router.put('/classes/:id', ClasseController.updatedClass)
router.delete('/classes/:id', ClasseController.deleteClass)
module.exports = router
