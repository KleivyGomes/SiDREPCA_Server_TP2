const express = require('express')
const { findAllInformations, findOneInformation, createInformation, deleteInformation, updateInformation } = require('../controllers/informationController')

const router = express.Router()
router.use(express.json())

router.post('/createinformation',createInformation)
router.get('/',findAllInformations)
router.get('/:id',findOneInformation)
router.put('/update/:id_',updateInformation)
router.delete('/delete/:id',deleteInformation)

module.exports = router