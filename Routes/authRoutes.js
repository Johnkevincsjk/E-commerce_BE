const express = require('express')

const { Signin_controller } = require('../Controllers/SigninController')
const { Login_controller } = require('../Controllers/LoginController')

const AuthRoute = express.Router()


AuthRoute.post('/Signin', Signin_controller)
AuthRoute.post('/Login', Login_controller)


module.exports = { AuthRoute }

