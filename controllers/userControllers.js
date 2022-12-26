require('dotenv').config()

const bcrypt = require('bcrypt')
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
            return res.status(500).json(error.message)
        }
    },
    novoUsuario: async (req, res) => {
        const { nome, password, admin, valido } = req.body
        const pass = await bcrypt.hash(password, await bcrypt.genSalt(10));
        try {
            const user = await User.create({
                nome,
                password: pass,
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

        const pass = await bcrypt.hash(password, await bcrypt.genSalt(10));
        try {
            const user = await User.update({ nome, password: pass, valido, admin }, { where: { id: id } })

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