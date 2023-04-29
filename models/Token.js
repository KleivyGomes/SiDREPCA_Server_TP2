const { Model, DataTypes } = require('sequelize')

class Token extends Model {
    static init(connection) {
        super.init({
            value: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        }, {
            sequelize: connection,
            tableName: 'token',
        })
    }
}

module.exports = Token