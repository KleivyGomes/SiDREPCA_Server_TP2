const { Model, DataTypes } = require('sequelize')

class Navio extends Model {
    static init(connection) {
        super.init({
            imo: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            nome: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 70) throw new Error("Nome deve conter no máximo 70 caractéres")                 
                    },
                }
            },
            tipo: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 30) throw new Error("Tipo deve conter no máximo 30 caractéres")                 
                    },
                }
            },
            maxcargas: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            maxpassageiros: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            proprietario: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 70) throw new Error("Tipo deve conter no máximo 70 caractéres")                 
                    },
                }
            }
        }, {
            sequelize: connection,
            tableName: 'navio',
        })
    }
}

module.exports = Navio