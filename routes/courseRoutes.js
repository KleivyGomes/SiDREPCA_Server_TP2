const express = require('express')
const { findAllCourses, findOneCourse, createCourse, updateCourse, deleteCourse } = require('../controllers/courseController')

const router = express.Router()
router.use(express.json())

router.post('/createcourse',createCourse)
router.get('/',findAllCourses)
router.get('/:id',findOneCourse)
router.put('/update/:id_',updateCourse)
router.delete('/delete/:id',deleteCourse)

module.exports = router