const Car = function(platNumber = null) {
    if (!new.target) throw Error("Car must be called with new keyword!");
    this.platNumber = platNumber;
}

module.exports = {
    Car
};
