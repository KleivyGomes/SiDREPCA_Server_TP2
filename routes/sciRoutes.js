const express = require('express')
const { findAllSCIs, findOneSCI, createSCI, updateSCI, deleteSCI } = require('../controllers/sciController')

const router = express.Router()
router.use(express.json())

router.post('/createsci',createSCI)
router.get('/',findAllSCIs)
router.get('/:id',findOneSCI)
router.put('/update/:id_',updateSCI)
router.delete('/delete/:id',deleteSCI)

module.exports = router