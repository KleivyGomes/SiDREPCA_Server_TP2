const User = require('../models/User')
const dbConn = require('../db/index')
User.init(dbConn)
module.exports = {
    lerUmUsuario: async (req, res) => {
        const { id } = req.params
        try {
            const user = await User.findByPk(id)
            if (!user) return res.status(400).json({ "Error": "Usuario não encontrado" })
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json(error)
        }
    },

    lerTodosUsuario: async (req, res) => {
        try {
            const user = await User.findAll()
            return res.status(200).json(user)
        }
        catch (error) {
            //console.log(res.json(error))
            return res.status(500).json(error.message)
        }
    },
    novoUsuario: async (req, res) => {
        
        const { nome, password, admin, valido } = req.body
        try {
            const user = await User.create({
                nome,
                password,
                valido,
                admin
            });
            return res.status(201).json({ user })

        } catch (error) {
            return res.status(500).json(error);
        }
    },
    atualizarUsuario: async (req, res) => {
        const { id } = req.params;
        const { nome, password, valido, admin } = req.body;
        try {
            const user = await User.update({ nome, password, valido, admin }, { where: { id: id } })

            res.status(200).json({ user });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    apagarUsuario: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await User.destroy({ where: { id: id } });

            res.status(200).json({ user });
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}