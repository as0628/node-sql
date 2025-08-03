// config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('manytomanydb', 'root', 'Anshu@0697', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
