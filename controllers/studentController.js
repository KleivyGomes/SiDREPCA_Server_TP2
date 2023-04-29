const Student = require('../models/Student')
const dbConn = require('../db/index')
Student.init(dbConn)

module.exports = {
    findOneStudent: async (req, res) => {
        const { number } = req.params
        try {
            const student = await Student.findByPk(number)
            if (!student) return res.status(400).json({ "Error": "Student do not find!" })
            return res.status(200).json(student)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },

    findAllStudents: async (req, res) => {
        try {
            const student = await Student.findAll()
            return res.status(200).json(student)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    createStudent: async (req, res) => {
        const { 
            number,
            name,
            identifier,
            date_of_birth,
            gender,
            local,
            nationality,
            phone,
            email 
        } = req.body

        try {
            const student = await Student.create({
                number,
                name,
                identifier,
                date_of_birth,
                gender,
                local,
                nationality,
                phone,
                email
            });
            return res.status(201).json({ student })
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    updateStudent: async (req, res) => {
        const { number_ } = req.params;
        const {
            number,
            name,
            identifier,
            date_of_birth,
            gender,
            local,
            nationality,
            phone,
            email
        } = req.body;

        try {
            const student = await Student.update(
                {
                    number,
                    name,
                    identifier,
                    date_of_birth,
                    gender,
                    local,
                    nationality,
                    phone,
                    email
                },
                { where: { number: number_ } })
            res.status(200).json({ student });
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    deleteStudent: async (req, res) => {
        const { number } = req.params;

        try {
            const student = await Student.destroy({ where: { number: number } });

            res.status(200).json({ student });
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }
}