const router = require('express').Router();
module.exports = router;

// base route is /api

router.use('/champions', require('./champions'));
