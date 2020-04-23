const {Router} = require('express')
const route = Router()

const HomeRoute = require('./home')

route.use('/', HomeRoute)

module.exports = route