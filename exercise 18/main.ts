let placeNames: string []=["Pakistan","India","America"];
//original order
console.log("original order",placeNames);
//create a array in alphabetical order withou t modifying actual list
 
console.log("Alphabetical order",[...placeNames].sort());
//still is original
console.log("still in original order",placeNames);
  //print the array in revers order without modifying the actual array list
console.log("revers order",[...placeNames].reverse());

console.log("still in original order",placeNames);
//change array in reverse order
console.log("original array reverse",placeNames.reverse());
 //back in original
console.log("again reverse",placeNames.reverse());
//array in alphabetical order
console.log("original in alphabetical order",placeNames.sort());
//again in reverse
console.log("original order reverse",placeNames.reverse());











