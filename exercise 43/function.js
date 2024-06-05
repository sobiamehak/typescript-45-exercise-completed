function show_megician(megician) {
    megician.forEach(function (name1) { return console.log(name1); });
}
function make_great(megicians) {
    return megicians.map(function (name) { return "The great ".concat(name); });
}
var megiciansName = ["Ali", "alina", "hina"];
//making a copy of array with slice
var copymegician_name = megiciansName.slice();
var megicians_great = make_great(copymegician_name);
show_megician(megiciansName);
show_megician(megicians_great);
