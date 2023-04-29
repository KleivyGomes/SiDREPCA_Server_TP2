const Information = require('../models/Information')
const dbConn = require('../db/index')
Information.init(dbConn)

module.exports = {
    findOneInformation: async (req, res) => {
        const { id } = req.params
        try {
            const information = await Information.findByPk(IMO)
            if (!information) return res.status(400).json({ "Error": "Information do not find!" })
            return res.status(200).json(information)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },

    findAllInformations: async (req, res) => {
        try {
            const information = await Information.findAll()
            return res.status(200).json(information)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    createInformation: async (req, res) => {
        const { title, subtitle, text } = req.body

        try {
            const information = await Information.create({
                title, 
                subtitle, 
                text
            });
            return res.status(201).json({ information })
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    updateInformation: async (req, res) => {
        const { id_ } = req.params;
        const { id, title, subtitle, text } = req.body;

        try {
            const information = await Information.update(
                { title, subtitle, text },
                { where: { id: id_ } })
            res.status(200).json({ information });
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    deleteInformation: async (req, res) => {
        const { id } = req.params;

        try {
            const information = await Information.destroy({ where: { id: id } });

            res.status(200).json({ information });
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }
}