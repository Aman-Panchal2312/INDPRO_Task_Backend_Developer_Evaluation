const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('order_db', 'root', '1409', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
