const express = require('express');
const app = express();

app.use(express.json());

app.get('/', async (req, res, next) => {
	res.send('hello');
});

app.use('/api', require('./api/api'));

app.listen(3000);
