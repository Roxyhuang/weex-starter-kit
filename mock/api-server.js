const express = require('express');
const http = require('http');
const app = express();
const path = require('path');
const fs = require('fs');
const home = path.resolve('mock/data/home.json');

const resolveJson = name => JSON.parse(fs.readFileSync(name));

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, APPID, APPVER, VUSER');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};

app.use(allowCrossDomain);

app.post('/product/list', (req, res) => {
    res.json(resolveJson(home));
});

const server = http.createServer(app);
server.listen(3000,  () => {
    console.log('Listening on %j', server.address());
});