require('dotenv').config()

module.exports = {
    host: 'localhost',
    username: 'postgres',
    password: '261216',
    database: 'SiDREPCA_DB',
    dialect: 'postgres',
    port: 5432,
    dialectOptions:{

    },
    define:{
        timestamps:false,
        underscored: true,
    }
}