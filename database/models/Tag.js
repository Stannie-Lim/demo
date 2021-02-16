const Sequelize = require('sequelize');
const db = require('../db');
const { UUID, UUIDV4, INTEGER, STRING, ENUM } = Sequelize;

const Tag = db.define('tag', {
	id: {
		type: UUID,
		primaryKey: true,
		defaultValue: UUIDV4,
	},
	tag: {
		type: ENUM('Fighter', 'Mage', 'Tank', 'Assassin', 'Support', 'Marksman'),
		allowNull: false,
		validate: {
			notEmpty: true,
		},
	},
});

module.exports = Tag;
