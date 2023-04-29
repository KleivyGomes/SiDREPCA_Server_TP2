const bcrypt = require('bcrypt')

const sciMiddle = (req, res, next) => {
    const { key } = req.params
    const keyAccess = await bcrypt.hash(key, await bcrypt.genSalt(10));
    bcrypt.compare(process.env.AGENTE_ACCESS_KEY, keyAccess, async (err, result) => {
        if (result) {
            next()
        }
        else {
            res.status(400).json({ "Error": "Acesso não autorizado!" })
        }
    });
}

export default sciMiddle;