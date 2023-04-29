const express = require('express')
const { findAllInternships, findOneInternship, createInternship, updateInternship, deleteInternship } = require('../controllers/internshipController')

const router = express.Router()
router.use(express.json())

router.post('/createinternship',createInternship)
router.get('/',findAllInternships)
router.get('/:id',findOneInternship)
router.put('/update/:id_',updateInternship)
router.delete('/delete/:id',deleteInternship)

module.exports = router