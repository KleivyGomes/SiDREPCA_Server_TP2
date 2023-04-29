const conn = require('../config/database')

const Sequelize = require('sequelize')
const dbConn = new Sequelize(conn)
const ligar = async () => {
  try {
    await dbConn.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    
  }
}
ligar();

module.exports = dbConn