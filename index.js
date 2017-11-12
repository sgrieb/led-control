const express = require('express');
const app = express();
var bodyParser = require('body-parser')
var Led = require('./server/led');
const fs = require('fs');

// front end serve
app.use(express.static('html'));
app.use('/js', express.static('js'));
app.use('/css', express.static('css'));

app.use(bodyParser.json());

var myLed = new Led('xm.gif');

// backend
app.post('/start', (req, res) => {
  
  console.log('start');
  myLed.start();

  res.sendStatus(200);
});

app.post('/stop', (req, res) => {
  console.log('stop');
  myLed.stop();

  res.sendStatus(200);
});

app.get('/img', (req, res) => {

  //var folder = '/Users/steve/Projects/led-control';
  var folder = '/app/led/rpi-rgb-led-matrix/utils/img'

  var folders = fs.readdirSync(folder);

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(folders));
});

app.post('/img', (req, res) => {
  myLed = new Led(req.body.name);
  myLed.start();
  
  res.sendStatus(200);
});

app.listen(3000, () => console.log('App listening on port 3000!'))
