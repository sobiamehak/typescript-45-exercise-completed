var guestList = ["Ayesha", "Asma", "Fozia", "Fazila"];
var dontCome = guestList[2];
console.log(dontCome, " can not come");
guestList.splice(2, 1, "Sobia");
//guestList.forEach(guest=>console.log(`Salam,${guest} would you like to dinner with me?`));  
console.log("good news! we have found a bigger table for dinner.");
guestList.unshift("adnan");
guestList.push("Shumaila");
var middleindex = (guestList.length / 2);
guestList.splice(middleindex, 0, "batool");
guestList.forEach(function (guestNew) { return console.log("Salam,".concat(guestNew, " would you like to dinner with me?")); });
console.log("The new dinner table wont arrive on time i have only two persons space");
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry ".concat(removeGuest, "i can not invite you for some reason.hope you dont mind."));
}
;
guestList.forEach(function (luckyGuest) { return console.log("luckly ".concat(luckyGuest, " you are still invited for dinner.")); });
guestList.pop();
guestList.pop();
console.log("empty list", guestList);
