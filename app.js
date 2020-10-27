const readline = require('readline');
const fs = require('fs');

const parkingHandler = require('./src/domains/parking/handler');

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
            parkingHandler.create_parking_lot(cmds);
            break;
        case 'park':
            console.log(2);
            break;
        case 'leave':
            console.log(3);
            break;
        case 'status':
            console.log(4);
            break;
        case 'registration_numbers_for_cars_with_colour':
            console.log(5);
            break;
        case 'slot_numbers_for_cars_with_colour':
            console.log(6);
            break;
        case 'slot_number_for_registration_number':
            console.log(7);
            break;
        case 'exit':
            process.exit(0);
        default:
            console.log('[ERROR] Unknown command!');
            break;
    }
}
