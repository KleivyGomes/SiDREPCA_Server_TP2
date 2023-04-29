const express = require('express')
const { findAllStudents, findOneStudent, createStudent, updateStudent, deleteStudent } = require('../controllers/studentController')

const router = express.Router()
router.use(express.json())

router.post('/createstudent', createStudent)
router.get('/', findAllStudents)
router.get('/:id', findOneStudent)
router.put('/update/:id_', updateStudent)
router.delete('/delete/:id', deleteStudent)

module.exports = router