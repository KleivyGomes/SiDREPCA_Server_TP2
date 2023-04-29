const express = require('express')
const { findAllDepartments, findOneDepartment, createDepartment, updateDepartment, deleteDepartment } = require('../controllers/departmentController')

const router = express.Router()
router.use(express.json())

router.post('/createdepartment', createDepartment)
router.get('/', findAllDepartments)
router.get('/:id', findOneDepartment)
router.put('/update/:id_', updateDepartment)
router.delete('/delete/:id', deleteDepartment)

module.exports = router