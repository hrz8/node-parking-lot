const { Car } = require("../car/car");

module.exports = {
    create_parking_lot(cmds, pSpace) {
        if (cmds.length < 2) {
            console.log("[ERROR] unknown N slot arguments!");
            return;
        }

        cmd = cmds[0];
        params = cmds.slice(1);
        nSlot = params[0];

        if (isNaN(nSlot)) {
            console.log("[ERROR] N slot argument must be numeric");
            return;
        }

        pSpace.initSlot(nSlot);

        console.log(`Created parking lot with ${nSlot} slots`);
        return;
    },

    park(cmds, pSpace) {
        if (cmds.length < 2) {
            console.log("[ERROR] unknown plat number!");
            return;
        }

        const availabe = pSpace.isAvailable();
        if (availabe === null) {
            console.log("There is no slot in parking space");
            return;
        }

        if (availabe === false) {
            console.log("Sorry, parking lot is full");
            return;
        }

        cmd = cmds[0];
        params = cmds.slice(1);
        platNumber = params[0];

        car = new Car(platNumber);
        if (!pSpace.addCar(availabe, car)) {
            console.log("Car is already in the parking space!");
            return;
        }

        console.log(`Allocated slot number: ${availabe + 1}`);
        return;
    },

    leave(cmds, pSpace) {
        if (cmds.length < 2) {
            console.log("[ERROR] unknown plat number!");
            return;
        }
    }
}
