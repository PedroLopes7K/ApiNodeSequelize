const { Router } = require('express')
const UserController = require('../controllers/UserController')

const router = Router()

router.get('/users', UserController.getAllUsers)
router.get('/users/:id', UserController.getUser)
router.post('/users', UserController.insertUser)
router.put('/users/:id', UserController.updatedUser)
router.delete('/users/:id', UserController.deleteUser)
router.get('/users/:id/registrations', UserController.getRegistrations)
router.post('/users/:id/registrations', UserController.insertRegistration)
router.put(
  '/users/:id/registrations/:registrationId',
  UserController.updateRegistration
)
router.delete(
  '/users/:id/registrations/:registrationId',
  UserController.deleteRegistration
)

module.exports = router
