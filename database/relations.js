// import every single model
const Champion = require('./models/Champion');
const Stat = require('./models/Stat');
const Tag = require('./models/Tag');

// make the relations
Stat.belongsTo(Champion);
Champion.hasOne(Stat);

Champion.hasMany(Tag);
Tag.belongsTo(Champion);

// export each model
module.exports = {
	Champion,
	Stat,
	Tag,
};
