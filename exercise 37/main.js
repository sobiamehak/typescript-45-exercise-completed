//making a function
function make_tshirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("creating a ".concat(size, " shirt with the ").concat(message, " print on  shirt."));
}
make_tshirt();
make_tshirt("medium");
make_tshirt("small", "I love Javascript.");
