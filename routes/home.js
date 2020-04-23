const {Router} = require('express')
const route = Router()

const HomeController = require('../controllers/home')

route.get('/', HomeController.index)
route.get('/login', HomeController.login)
route.get('/register', HomeController.register)

module.exports = route