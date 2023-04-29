const SCI = require('../models/SCI')
const dbConn = require('../db/index')
SCI.init(dbConn)

module.exports = {
    findOneSCI: async (req, res) => {
        const { id } = req.params
        try {
            const sci = await SCI.findByPk(id)
            if (!sci) return res.status(400).json({ "Error": "SCI do not find!" })
            return res.status(200).json(sci)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },

    findAllSCIs: async (req, res) => {
        try {
            const sci = await SCI.findAll()
            return res.status(200).json(sci)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    createSCI: async (req, res) => {
        const { year } = req.body

        try {
            const sci = await SCI.create({
                year
            });
            return res.status(201).json({ sci })
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    updateSCI: async (req, res) => {
        const { id_ } = req.params;
        const { id, year } = req.body;

        try {
            const sci = await SCI.update(
                { id, year },
                { where: { id: id_ } })
            res.status(200).json({ sci });
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    deleteSCI: async (req, res) => {
        const { id } = req.params;

        try {
            const sci = await SCI.destroy({ where: { id: id } });

            res.status(200).json({ sci });
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }
}