var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var placeNames = ["Pakistan", "India", "America"];
//original order
console.log("original order", placeNames);
//create a array in alphabetical order withou t modifying actual list
console.log("Alphabetical order", __spreadArray([], placeNames, true).sort());
//still is original
console.log("still in original order", placeNames);
//print the array in revers order without modifying the actual array list
console.log("revers order", __spreadArray([], placeNames, true).reverse());
console.log("still in original order", placeNames);
//change array in reverse order
console.log("original array reverse", placeNames.reverse());
//back in original
console.log("again reverse", placeNames.reverse());
//array in alphabetical order
console.log("original in alphabetical order", placeNames.sort());
//again in reverse
console.log("original order reverse", placeNames.reverse());
