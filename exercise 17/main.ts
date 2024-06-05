let guestList=["Ayesha","Asma","Fozia","Fazila"];
let dontCome=guestList[2];
console.log(dontCome," can not come");
guestList.splice(2,1,"Sobia");
 //guestList.forEach(guest=>console.log(`Salam,${guest} would you like to dinner with me?`));  


console.log ("good news! we have found a bigger table for dinner.");
guestList.unshift("adnan");

guestList.push("Shumaila");

let middleindex:number=(guestList.length/2);
guestList.splice(middleindex,0,"batool");

guestList.forEach(guestNew=>console.log(`Salam,${guestNew} would you like to dinner with me?`));


console.log("The new dinner table wont arrive on time i have only two persons space");
while(guestList.length>2){
    let removeGuest=guestList.pop();
    console.log(`Sorry ${removeGuest}i can not invite you for some reason.hope you dont mind.`)
};

guestList.forEach(luckyGuest=>console.log(`luckly ${luckyGuest} you are still invited for dinner.`));
guestList.pop();
guestList.pop();
console.log("empty list" ,guestList);
