const Space = function() {
    if (!new.target) throw Error("Space must be called with new keyword!");
    this.cars = [];
    this.slots = [];
}
Space.prototype.initSlot = function(n) {
    for (let i = 1; i <= n; i++) {
        slot = new Slot(
            i,
            String(i)
        );
        this.slots.push(slot);
    }
}
Space.prototype.isAvailable = function() {
    if (this.slots.length === 0) {
        return null;
    }
    let available = null;
    for (let i = 0; i < this.slots.length; i++) {
        const slot = this.slots[i];
        if (slot.car === null && slot.enterAt === null) {
            available = i;
            break
        }
    }
    return available == null ? false : available;
}
Space.prototype.addCar = function(i, car) {
    const alreadyInSpace = this.cars.filter(o => o.name === car.name).length;
    console.log(alreadyInSpace);
    if (alreadyInSpace) {
        return false;
    }
    this.slots[i].updateCar(car);
    this.cars.push(car);
    return true;
}


const Slot = function() {
    if (!new.target) throw Error("Slot must be called with new keyword!");
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
