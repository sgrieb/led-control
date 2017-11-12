const express = require('express');
const app = express();
var Led = require('./server/led');

// front end serve
app.use(express.static('html'));
app.use('/js', express.static('js'));
app.use('/css', express.static('css'));

var myLed = new Led('');

// backend
app.post('/start', (req, res) => {
  
  console.log('start');
  myLed.start();
});

app.post('/stop', (req, res) => {
  console.log('stop');
  myLed.stop();
});

app.listen(3000, () => console.log('App listening on port 3000!'))
