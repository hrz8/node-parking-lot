const Car = function(id = null, platNumber = null, color = null) {
    if (!new.target) throw Error("Car must be called with new keyword!");
    this.id = id;
    this.platNumber = platNumber;
    this. color = color;
}

module.exports = {
    Car
};
