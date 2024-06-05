function show_megician(megician) {
    megician.forEach(function (name1) { return console.log(name1); });
}
function make_great(megicians) {
    return megicians.map(function (name) { return "The great".concat(name); });
}
var megiciansName = ["Ali", "alina", "hina"];
var great_megician = make_great(megiciansName);
console.log(great_megician);
show_megician(great_megician);
