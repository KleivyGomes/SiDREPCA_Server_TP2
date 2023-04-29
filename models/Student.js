const { Model, DataTypes } = require('sequelize')

class Student extends Model {
    static init(connection) {
        super.init({
            number: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey:true,
                validate: {
                    maxLength: val => {
                        if (val.length > 70) throw new Error("porto_partida deve conter no máximo 70 caractéres")                 
                    },
                }
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    maxLength: val => {
                        if (val.length > 70) throw new Error("porto_chegada deve conter no máximo 70 caractéres")                 
                    },
                }
            },
            identifier: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            date_of_birth: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            gender: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            local: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            nationality: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            phone: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            email: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        }, {
            sequelize: connection,
            tableName: 'student',
        })
    }
}

module.exports = Student