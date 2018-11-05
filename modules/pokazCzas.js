var czas = require('os');
exports.pokazCzas = function () 
{ 
    var uptime = czas.uptime()
    var godzin = Math.floor(uptime / (60 * 60));
    var minut = Math.floor((uptime-godzin*60*60) / 60);
    var sekund = Math.floor(uptime - godzin*60*60 - minut*60);
    console.log('Uptime: ~'+uptime.toFixed(0)+'  czyli: '+godzin+'godz. '+minut+'min. '+sekund+'s');
}; 
