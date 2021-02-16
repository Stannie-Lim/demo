const db = require('../database/db');
const { Champion, Stat, Tag } = require('../database/relations');
const champions = require('lol-champions');

const seed = async () => {
	await db.sync({ force: true });

	for (const { name, description, title, icon, stats, tags } of champions) {
		const champion = await Champion.create({
			name,
			description,
			title,
			icon,
		});

		const { hp, mp, armor } = stats;
		await Stat.create({
			hp,
			mp,
			armor,
			championId: champion.id,
		});

		for (const tag of tags) {
			await Tag.create({
				tag,
				championId: champion.id,
			});
		}
	}

	await db.close();
	console.log('seeded!');
};

seed();
