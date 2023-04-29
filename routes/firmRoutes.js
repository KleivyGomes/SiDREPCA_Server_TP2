const express = require('express')
const { findAllFirms, findOneFirm, createFirm, updateFirm, deleteFirm } = require('../controllers/firmControllers')

const router = express.Router()
router.use(express.json())

router.post('/createfirm',createFirm)
router.get('/',findAllFirms)
router.get('/:id',findOneFirm)
router.put('/update/:id_',updateFirm)
router.delete('/delete/:id',deleteFirm)

module.exports = router