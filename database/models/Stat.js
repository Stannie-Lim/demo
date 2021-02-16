const Sequelize = require('sequelize');
const db = require('../db');
const { UUID, UUIDV4, INTEGER, STRING, FLOAT } = Sequelize;

const Stat = db.define('stat', {
	id: {
		type: UUID,
		primaryKey: true,
		defaultValue: UUIDV4,
	},
	hp: {
		type: FLOAT,
		validate: {
			max: 50000,
			min: 0,
		},
	},
	mp: {
		type: FLOAT,
		validate: {
			max: 50000,
			min: 0,
		},
	},
	armor: {
		type: FLOAT,
		validate: {
			max: 5000,
			min: 0,
		},
	},
});

module.exports = Stat;
