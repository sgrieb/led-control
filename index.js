

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

const { exec } = require('child_process');
exec('cd /app/led/rpi-rgb-led-matrix && sudo examples-api-use/demo -D0', (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))



