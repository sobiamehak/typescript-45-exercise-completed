var currentUsersname = ["Ali", "Danish", "Fahad", "Areeba", "Zeeshan"];
var newUsername = ["ali", "hina", "Danish", "soni", "fozia"];
newUsername.forEach(function (newoneuser) {
    var our_condition = currentUsersname.some(function (currentoneuser) {
        return currentoneuser.toLowerCase() === newoneuser.toLowerCase();
    });
    if (our_condition) {
        console.log("sorry,".concat(newoneuser, " is already taken"));
    }
    else {
        console.log("This username".concat(newoneuser, " is available"));
    }
});
