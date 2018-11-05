var os= require('os');
var info2 = require('./modules/czas.js');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
    console.log("Wpisz exit, info, getOSinfo lub coś innego");
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case 'exit':
                process.exit();
            case 'info':
                console.log(process.platform);
                console.log(process.version);
                break;
            case 'getOSinfo':
                info2.infoOS();
                var aaa=os.hostname();
                console.log(aaa);
                break;
            default:
                console.log('Wpisałeś tekst:  '+input.toString());
        }
    }
});