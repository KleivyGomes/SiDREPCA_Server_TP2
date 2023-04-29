const Firm = require('../models/Firm')
const dbConn = require('../db/index')
Firm.init(dbConn)

module.exports = {
    findOneFirm: async (req, res) => {
        const { id } = req.params
        try {
            const firm = await Firm.findByPk(id)
            if (!firm) return res.status(400).json({ "Error": "Firm do not find!" })
            return res.status(200).json(firm)
        } catch (error) {
            return res.status(500).json(error)
        }
    },

    findAllFirms: async (req, res) => {
        try {
            const firm = await Firm.findAll()
            return res.status(200).json(firm)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    createFirm: async (req, res) => {
        const { name, local } = req.body
        try {
            const firm = await Firm.create({
                name, 
                local,
            });
            return res.status(201).json({ firm })

        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateFirm: async (req, res) => {
        const { id_firm } = req.params;
        const { id, name, local } = req.body;
        try {
            const firm = await Firm.update({ id, name, local }, { where: { id: id_firm } })

            res.status(200).json({ firm });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteFirm: async (req, res) => {
        const { id } = req.params;
        try {
            const firm = await Firm.destroy({ where: { id: id } });

            res.status(200).json({ firm });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}