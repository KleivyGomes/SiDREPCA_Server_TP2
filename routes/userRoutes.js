const express = require('express')
const { novoUsuario, lerTodosUsuario, lerUmUsuario, apagarUsuario, atualizarUsuario} = require('../controllers/userControllers')

const router = express.Router()
router.use(express.json())

router.post('/novoUser',novoUsuario)
router.get('/',lerTodosUsuario)
router.get('/:id',lerUmUsuario)
router.put('/atualizar/:id',atualizarUsuario)
router.delete('/delete/:id',apagarUsuario)

module.exports = router