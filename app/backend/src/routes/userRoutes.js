const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para criar um novo usuário
router.post('/users', userController.createUser);

// Outras rotas do CRUD...

module.exports = router;
