const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(connection) {
        super.init({
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 70) throw new Error("Nome deve conter no máximo 70 caractéres")                 
                    }
                }
            }, 
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 120) throw new Error("Password deve conter no máximo 120 caractéres")                 
                    }
                }
            },
            valido: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            admin: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
        }, {
            sequelize: connection,
            tableName: 'user',
        })
    }
}

module.exports = User