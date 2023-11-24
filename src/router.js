const express = require('express');
const router = express.Router();

//Controllers
const createUserController = require('./controllers/user/CreateUserController');
const LoginUserController = require('./controllers/user/LoginUserController')

// Rotas 

router.get('/user', new createUserController().handle )

router.get('/user/login', new LoginUserController().handle)




module.exports = router