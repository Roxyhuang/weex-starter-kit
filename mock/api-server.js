const express = require('express');
const http = require('http');
const app = express();
const productList = require('./data/product.js');

const resolveJson = name => JSON.parse(name);

const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, APPID, APPVER, VUSER');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};

app.use(allowCrossDomain);

app.post('/product/list', (req, res) => {
    res.json(resolveJson(productList));
});

const server = http.createServer(app);
server.listen(3000,  () => {
    console.log('Listening on %j', server.address());
});