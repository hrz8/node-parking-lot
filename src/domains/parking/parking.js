const { Car } = require("../car/car");

const Space = function() {
    if (!new.target) throw Error("Space must be called with new keyword!");
    this.slots = [];
}
Space.prototype.appendSlot = function(slot) {
    this.slots.push(slot);
}

const Slot = function(id, name) {
    if (!new.target) throw Error("Slot must be called with new keyword!");
    this.id = id;
    this.name = name;
    this.car = new Car();
    this.enterAt = null;
}
Slot.prototype.updateCar = function(car) {
    this.car = car;
    this.enterAt = new Date();
}

module.exports = {
    Space,
    Slot
};
