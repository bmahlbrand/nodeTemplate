const config = require('../config.js');
const fs = require('fs');
const geoip = require('geoip-lite');

function logGeoIP(req, res, next) {
    const geo = geoip.lookup(req.ip);

    console.log(req.ip);
    console.log(req.headers['user-agent']);

    console.log(geo);
    fs.appendFileSync(config.logpath, 'new request:');
    fs.appendFileSync(config.logpath, '\n');
    fs.appendFileSync(config.logpath, req.ip);
    fs.appendFileSync(config.logpath, '\n');
    fs.appendFileSync(config.logpath, req.headers['user-agent']);
    fs.appendFileSync(config.logpath, '\n');
    fs.appendFileSync(config.logpath, new Date().toISOString());
    fs.appendFileSync(config.logpath, JSON.stringify(geo));
    fs.appendFileSync(config.logpath, '\n\n');

    next();

}

module.exports = { logGeoIP };