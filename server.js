const express = require('express');
const app = express();
const path = require('path');
const geoIP = require('./middleware/geoIP').logGeoIP;

const config = require('./config.js');

app.use(geoIP);

app.get('/', (req, res) => {
	console.log(req.url);
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.use('*', (req, res) => {
	console.log(req.url);
	res.sendFile(path.join(__dirname, req.url));
});

app.listen(config.port, () => {
    console.log(config.appname, 'is live at Port:', config.port);
});
