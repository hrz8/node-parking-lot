const { Space } = require("./parking");
const repository = require("./repository");

module.exports = {
    create_parking_lot(cmds) {
        if (cmds.length < 2) {
            throw Error("unknown N slot arguments");
        }

        cmd = cmds[0];
        params = cmds.slice(1);

        if (isNaN(params)) {
            throw Error("N slot argument must be numeric");
        }

        nSlot = params[0];
        newParkingLot = repository.create(nSlot)
        console.log(newParkingLot);
    }
}
