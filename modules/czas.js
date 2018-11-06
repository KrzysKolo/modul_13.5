var os= require('os');
var colors = require('colors');
var info = require('./pokazCzas.js');

exports.infoOS = function() {
    
    var type = os.type();
                var release = os.release();
                if (type === 'Darwin') {
                    type = 'OSX';
                }
                else if (type === 'Windows_NT') {
                    type = 'Windows';
                }
                console.log('System: '.grey, type);
                console.log('Release: '.red, release);
                var cpu = os.cpus()[0].model;
                console.log('CPU model: '.blue, cpu);
                info.pokazCzas();
                var arch=os.arch ();
                console.log(arch.yellow);
                var userInfo = os.userInfo();
                console.log('User name: ', userInfo.username.magenta);
                console.log('Home dir: ', userInfo.homedir.cyan);

};