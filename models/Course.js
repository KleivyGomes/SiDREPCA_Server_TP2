const { Model, DataTypes } = require('sequelize')

class Course extends Model {
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
            internship_year: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        }, {
            sequelize: connection,
            tableName: 'course',
        })
    }
}

module.exports = Course