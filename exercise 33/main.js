var values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
    var onenumber = values_1[_i];
    var ordinalnumber = void 0;
    if (onenumber === 1) {
        ordinalnumber = "st";
    }
    else if (onenumber === 2) {
        ordinalnumber = "nd";
    }
    else if (onenumber === 3) {
        ordinalnumber = "rd";
    }
    else {
        ordinalnumber = "th";
    }
    console.log("".concat(onenumber).concat(ordinalnumber));
}
