var userName = ["Asma", "ayesha", "fazila", "Admin", "aina"];
userName = [];
if (userName.length === 0) {
    console.log("your array is empty you need to find some users.");
}
else {
    userName.forEach(function (oneuser) {
        if (oneuser === "Admin") {
            console.log("Hello ".concat(oneuser, " ,would you like to see a status report?"));
        }
        else {
            console.log("hello ".concat(oneuser, ", thank you for login."));
        }
    });
}
