const router = require('express').Router();
const { Champion, Skill, Tag, Stat } = require('../../database/relations');
module.exports = router;

// base route is /api/champions

router.get('/', async (req, res, next) => {
	try {
		res.send(
			await Champion.findAll({
				include: [Stat, Tag],
			})
		);
	} catch (err) {
		console.log(err);
	}
});

router.get('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		res.send(
			await Champion.findByPk(id, {
				include: [Stat, Tag],
			})
		);
	} catch (err) {
		console.log(err);
	}
});

router.post('/', async (req, res, next) => {
	const { name, description, title, icon } = req.body;
	try {
		res.send(await Champion.create({ name, description, title, icon }));
	} catch (err) {
		console.log(err);
	}
});

router.delete('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		await Champion.destroy({ where: { id } });
		res.sendStatus(204);
	} catch (err) {
		console.log(err);
	}
});
