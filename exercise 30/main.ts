var userName = ["Asma", "ayesha", "fazila", "Admin", "aina"];
userName.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("Hello ".concat(oneuser, " ,would you like to see a status report?"));
    }
    else {
        console.log("hello ".concat(oneuser, ", thank you for login."));
    }
});
