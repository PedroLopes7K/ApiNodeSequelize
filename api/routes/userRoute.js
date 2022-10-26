const { Router } = require('express')
const UserController = require('../controllers/UserController')

const router = Router()

router.get('/users', UserController.getAllUsers)
router.get('/users/:id', UserController.getUser)
router.post('/users', UserController.insertUser)
router.put('/users/:id', UserController.updatedUser)
router.delete('/users/:id', UserController.deleteUser)

module.exports = router
