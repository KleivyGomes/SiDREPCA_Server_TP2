const { Model, DataTypes } = require('sequelize')

class department extends Model {
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
            }
        }, {
            sequelize: connection,
            tableName: 'department',
        })
    }
}

module.exports = department