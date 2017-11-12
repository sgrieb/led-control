const child_process = require('child_process');

function Led(_img) {
    this.img = _img;
    this.cmd = null;
}

Led.prototype.start = function() {
    if (this.cmd) {
        this.cmd.kill();
    }

    //this.cmd = child_process.spawn('ls');
    this.cmd = child_process.spawn('cd /app/led/rpi-rgb-led-matrix && sudo examples-api-use/demo -D0');
};

Led.prototype.stop = function() {
    if (this.cmd) {
        this.cmd.kill();
    }
};

module.exports = Led;