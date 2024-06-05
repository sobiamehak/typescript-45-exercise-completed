function making_sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("\n making a sandwich with the following items \n");
    item.forEach(function (oneitem) { return console.log(oneitem); });
    console.log("enjoy your sandwich.");
}
making_sandwich("chicken", "black paper", "salt", "mayo");
making_sandwich("bread", "mayo ");
making_sandwich("bread", "katchup", "mayo", "chichen");
