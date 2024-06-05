let guestList=["Ayesha","Asma","Fozia","Fazila"];
let dontCome=guestList[2];
console.log(dontCome," can not come");
guestList.splice(2,1,"Sobia");
 guestList.forEach(guest=>console.log(`Salam,${guest} would you like to dinner with me?`));
