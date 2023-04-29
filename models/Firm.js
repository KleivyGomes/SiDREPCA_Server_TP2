const { Model, DataTypes } = require('sequelize')

class Firm extends Model {
    static init(connection) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 70) throw new Error("Nome deve conter no máximo 70 caractéres")                 
                    }
                }
            }, 
            local: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 120) throw new Error("Password deve conter no máximo 120 caractéres")                 
                    }
                }
            }
        }, {
            sequelize: connection,
            tableName: 'firm',
        })
    }
}

module.exports = Firm