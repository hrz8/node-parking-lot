const { Space, Slot } = require("./parking");

module.exports = {
    create(n) {
        parkingSpace = new Space();

        for (let i = 1; i <= n; i++) {
            slot = new Slot(
                i,
                String(i)
            );
            parkingSpace.appendSlot(slot);
        }

        return parkingSpace;
    }
}
