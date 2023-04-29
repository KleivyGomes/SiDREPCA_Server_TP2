const Token = require('../models/Token')
const dbConn = require('../db/index')
Token.init(dbConn)

module.exports = {
    findOneToken: async (req, res) => {
        const { id } = req.params
        try {
            const token = await Token.findByPk(id)
            if (!token) return res.status(400).json({ "Error": "Token do not find!" })
            return res.status(200).json(token)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },

    findAllTokens: async (req, res) => {
        try {
            const token = await Token.findAll()
            return res.status(200).json(token)
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    createToken: async (req, res) => {
        const { value } = req.body

        try {
            const token = await Token.create({
                value
            });
            return res.status(201).json({ token })
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    updateToken: async (req, res) => {
        const { id_ } = req.params;
        const { id, value } = req.body;

        try {
            const token = await Token.update(
                { id, value },
                { where: { id: id_ } })
            res.status(200).json({ token });
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    },
    deleteToken: async (req, res) => {
        const { id } = req.params;

        try {
            const token = await Token.destroy({ where: { id: id } });

            res.status(200).json({ token });
        }
        catch (error) {
            return res.status(500).json(error.message)
        }
    }
}