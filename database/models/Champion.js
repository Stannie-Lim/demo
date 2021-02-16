const Sequelize = require('sequelize');
const db = require('../db');
const { UUID, UUIDV4, INTEGER, STRING, TEXT } = Sequelize;

const Champion = db.define('champion', {
	id: {
		type: UUID,
		primaryKey: true,
		defaultValue: UUIDV4,
	},
	name: {
		type: STRING,
		unique: true,
		validator: {
			notEmpty: true,
		},
		allowNull: false,
	},
	title: {
		type: STRING,
		unique: true,
		validator: {
			notEmpty: true,
		},
		allowNull: false,
	},
	icon: {
		type: STRING,
		unique: true,
		validator: {
			notEmpty: true,
		},
		allowNull: false,
	},
	description: {
		type: TEXT,
		unique: true,
		validator: {
			notEmpty: true,
		},
		allowNull: false,
	},
});

module.exports = Champion;
