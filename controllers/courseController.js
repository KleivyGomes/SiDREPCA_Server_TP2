const Course = require('../models/Course')
const dbConn = require('../db/index')
Course.init(dbConn)

module.exports = {
    findOneCourse: async (req, res) => {
        const { id } = req.params
        try {
            const course = await Course.findByPk(id)
            if (!course) return res.status(400).json({ "Error": "Course do not find!" })
            return res.status(200).json(course)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },

    findAllCourses: async (req, res) => {
        try {
            const course = await Course.findAll()
            return res.status(200).json(course)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    createCourse: async (req, res) => {
        const { id, nome, internship_year } = req.body

        try {
            const course = await Course.create({
                id, 
                nome, 
                internship_year,
            });
            return res.status(201).json({ course })
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    updateCourse: async (req, res) => {
        const { id_ } = req.params;
        const { id, nome, internship_year } = req.body;

        try {
            const course = await Course.update(
                { 
                    id, 
                    nome, 
                    internship_year,
                },
                { where: { id: id_ } })
            res.status(200).json({ course });
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    deleteCourse: async (req, res) => {
        const { id } = req.params;

        try {
            const course = await Course.destroy({ where: { id: id } });

            res.status(200).json({ course });
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }
}