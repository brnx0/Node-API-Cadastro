//Import
const express = require('express');
const router = express.Router();
const Autenticado = require('./middleware/autenticado')

//Controllers
const createUserController = require('./controllers/user/CreateUserController');
const LoginUserController = require('./controllers/user/LoginUserController')
const ListUsuariosController = require('./controllers/user/ListUsuariosController')

// Rotas 
router.get('/user', new createUserController().handle )
router.get('/user/login',  new LoginUserController().handle)
router.post('/user/list', new Autenticado().execute ,new ListUsuariosController().handle)

module.exports = router
