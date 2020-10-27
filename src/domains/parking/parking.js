const Space = function() {
    if (!new.target) throw Error("Space must be called with new keyword!");
    this.cars = [];
    this.slots = [];
}

Space.prototype.initSlot = function(n) {
    for (let i = 1; i <= n; i++) {
        slot = new Slot(i);
        this.slots.push(slot);
    }
}

Space.prototype.countEmpty = function() {
    const arr = this.slots.filter(o => o.car === null && o.enterAt === null);
    return arr.length;
}

Space.prototype.isAvailable = function() {
    if (this.slots.length === 0) {
        return null;
    }
    const available = this.slots.findIndex(o => o.car === null && o.enterAt === null);
    return available === -1 ? false : available;
}

Space.prototype.addCar = function(i, car) {
    const alreadyInSpace = this.cars.filter(o => o.platNumber === car.platNumber).length;
    if (alreadyInSpace) {
        return false;
    }
    this.slots[i].updateCar(car);
    this.cars.push(car);
    return true;
}

Space.prototype.removeCar = function(platNumber) {
    const isInSlot = this.slots.findIndex(o => o.car !== null ? o.car.platNumber === platNumber : false);
    if (isInSlot < 0) {
        return [false];
    }
    const { id, car, enterAt } = this.slots[isInSlot];
    this.slots[isInSlot].updateCar();

    const isInSpace = this.cars.findIndex(o => o.platNumber === platNumber);
    this.cars.splice(isInSpace, 1);
    return [true, {id, car: car.platNumber, enterAt }];
}

const Slot = function(id) {
    if (!new.target) throw Error("Slot must be called with new keyword!");
    this.id = id;
    this.car = null;
    this.enterAt = null;
}

Slot.prototype.updateCar = function(car = null) {
    this.enterAt = new Date();
    if (car === null) {
        this.enterAt = null;
    }
    this.car = car;
}

module.exports = {
    Space,
    Slot
};
