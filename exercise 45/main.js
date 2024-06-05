function creatCar(manufacturer, model) {
    var Options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        Options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    Options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
var myCar = creatCar("Toyota", "corolla", "colour:balck", "sunroof : true");
console.log(myCar);
