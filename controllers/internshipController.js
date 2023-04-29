const Internship = require('../models/Internship')
const dbConn = require('../db/index')
Internship.init(dbConn)

module.exports = {
    findOneInternship: async (req, res) => {
        const { id } = req.params
        try {
            const internship = await Internship.findByPk(id)
            if (!internship) return res.status(400).json({ "Error": " Internship do not find!" })
            return res.status(200).json(internship)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },

    findAllInternships: async (req, res) => {
        try {
            const internship = await Internship.findAll()
            return res.status(200).json(internship)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    createInternship: async (req, res) => {
        const { year, status } = req.body

        try {
            const internship = await Internship.create({
                year,
                status,
            });
            return res.status(201).json({ internship })
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    updateInternship: async (req, res) => {
        const { id_ } = req.params;
        const { id, year, status } = req.body;

        try {
            const internship = await Internship.update(
                { id, year, status },
                { where: { id: id_ } })
            res.status(200).json({ internship });
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    deleteInternship: async (req, res) => {
        const { id } = req.params;

        try {
            const internship = await Internship.destroy({ where: { id: id } });

            res.status(200).json({ internship });
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }
}