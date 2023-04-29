require('dotenv').config()
const Department = require('../models/Department')
const dbConn = require('../db/index')

Department.init(dbConn)

module.exports = {
    findOneDepartment: async (req, res) => {
        const { id } = req.params

        try {
            const department = await Department.findByPk(id)
            if (!department) return res.status(400).json({ "Error": "department do not find!" })
            return res.status(200).json(department)
        } catch (error) {
            return res.status(500).json(error)
        }
    },

    findAllDepartments: async (req, res) => {
        try {
            const department = await Department.findAll()
            return res.status(200).json(department)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    createDepartment: async (req, res) => {
        const { name } = req.body
        try {
            const department = await Department.create({
                nome
            });
            return res.status(201).json({ department })

        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateDepartment: async (req, res) => {
        const { id_ } = req.params;
        const { id, nome } = req.body;
        
        try {
            const department = await Department.update({ id, nome }, { where: { id: id_ } })

            res.status(200).json({ department });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteDepartment: async (req, res) => {
        const { id } = req.params;

        try {
            const department = await Department.destroy({ where: { id: id } });

            res.status(200).json({ department });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}