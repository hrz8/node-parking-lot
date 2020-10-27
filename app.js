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
            console.log(parkingSpace);
            break;
        case 'park':
            parkingHandler.park(cmds, parkingSpace);
            console.log(parkingSpace.slots);
            console.log(parkingSpace.cars);
            break;
        case 'leave':
            parkingHandler.leave(cmds, parkingSpace);
            console.log(parkingSpace.slots);
            console.log(parkingSpace.cars);
            console.log(3);
            break;
        case 'status':
            console.log(4);
            break;
        case 'exit':
            process.exit(0);
        default:
            console.log('[ERROR] Unknown command!');
            break;
    }
}
