function show_megician(megician) {
    megician.forEach(function (name) { return console.log(name); });
}
function make_great(megician) {
    return megician.map(function (name) { return "The great ".concat(name); });
}
var megician_name = ["smith", "harry", "john"];
var megicians = make_great(megician_name);
console.log(megicians);
show_megician(megicians);
