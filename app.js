const readline = require('readline');
const fs = require('fs');

const { Space } = require('./src/domains/parking/parking');
const parkingHandler = require('./src/domains/parking/handler');

const parkingSpace = new Space();

const args = process.argv.slice(2);
if (args.length > 0) {
    const fileName = args[0];

    const readFile = readline.createInterface({
        input: fs.createReadStream(fileName),
        output: false,
        console: false
    });

    readFile.on('line', line => {
        commandHandler(line);
    }).on('close', () => {
        process.exit(0);
    });
}

const readInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

readInput.on('line', line => {
    commandHandler(line);
});    

function commandHandler(str) {
    cmds = str.split(' ');

    switch (cmds[0]) {
        case 'create_parking_lot':
            parkingHandler.create_parking_lot(cmds, parkingSpace);
            break;
        case 'park':
            parkingHandler.park(cmds, parkingSpace);
            break;
        case 'leave':
            parkingHandler.leave(cmds, parkingSpace);
            break;
        case 'status':
            parkingHandler.status(parkingSpace);
            break;
        case 'exit':
            process.exit(0);
        default:
            console.log('[ERROR] Unknown command!');
            break;
    }
}
