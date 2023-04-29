const express = require('express')
const { findAllTokens, findOneToken, createToken, updateToken, deleteToken } = require('../controllers/tokenController')

const router = express.Router()
router.use(express.json())

router.post('/createtoken',createToken)
router.get('/',findAllTokens)
router.get('/:id',findOneToken)
router.put('/update/:id_',updateToken)
router.delete('/delete/:id',deleteToken)

module.exports = router