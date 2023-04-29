const { Model, DataTypes } = require('sequelize')

class Internship extends Model {
    static init(connection) {
        super.init({
            year: {
                type: DataTypes.DATE,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 70) throw new Error("Nome deve conter no máximo 70 caractéres")                 
                    }
                }
            }, 
            status: {
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
            tableName: 'internship',
        })
    }
}

module.exports = Internship