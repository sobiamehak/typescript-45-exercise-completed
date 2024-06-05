var guestList = ["Ayesha", "Asma", "Fozia", "Fazila"];
var dontCome = guestList[2];
console.log(dontCome, " can not come");
guestList.splice(2, 1, "Sobia");
guestList.forEach(function (guest) { return console.log("Salam,".concat(guest, " would you like to dinner with me?")); });
