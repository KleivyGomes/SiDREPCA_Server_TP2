const { Model, DataTypes } = require('sequelize')

class Information extends Model {
    static init(connection) {
        super.init({
            title: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            subtitle: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            text: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }, {
            sequelize: connection,
            tableName: 'information',
        })
    }
}

module.exports = Information