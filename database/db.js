const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost/league', { logging: false });

module.exports = db;
