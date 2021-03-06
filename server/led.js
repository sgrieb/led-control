const child_process = require('child_process');

function Led(_img) {
    this.img = _img;
    this.cmd = null;
}

Led.prototype.start = function() {
    if (this.cmd) {
        this.cmd = child_process.exec('killall led-image-viewer', onCmdFinish);
        console.log('process killed');
    }

    //this.cmd = child_process.spawn('ls');
    //this.cmd = child_process.spawn('cd /app/led/rpi-rgb-led-matrix && sudo examples-api-use/demo -D0');
    this.cmd = child_process.exec('cd /app/led/rpi-rgb-led-matrix/utils && nohup sudo ./led-image-viewer ./img/'+ this.img +' </dev/null >myprogram.log & ', onCmdFinish);
};

Led.prototype.stop = function() {
    if (this.cmd) {
        this.cmd = child_process.exec('killall led-image-viewer', onCmdFinish);
        console.log('process killed');
    }
};

function onCmdFinish(error, stdout, stderr) {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
}

module.exports = Led;