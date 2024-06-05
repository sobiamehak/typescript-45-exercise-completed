let apple="apple";
let uppercaseApple="APPLE";
let ten=10;
let twenty=20;
let items=["biryani","kabab","qorma","kheer"];
//test for euality and unequality
console.log("\n apple is equal to apple?");
console.log(apple=="apple");

//unequality
console.log("\nIs apple is not equal to apple?");
console.log(apple!="apple");
//test lowercase function
console.log("\nIs APPLE is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase()=="apple");
console.log("\nIs APPLE is not equal to apple after converting lowercase?");
console.log(uppercaseApple.toLowerCase()!=="apple");
//numerical test
console.log("\nIs ten is equal to twenty?");
console.log(ten==twenty);
//not equal
console.log("\nIs ten is not eqaul to twenty");
console.log(ten!=twenty);
//greater than
console.log("\n Is ten is greater than zero?");
console.log(ten>0);
//greater  than
console.log("\nIs ten is greater than or equal to  5");
console.log( ten>=5);
//less than
console.log("\nIs twenty less than or equal to 10?");
console.log(twenty<=10);
//test using and ooperators(&&)
console.log("\n twenty is not equal to 10 and twenty is greater than 10 ?");
console.log(twenty!=ten && twenty> 10);


console.log("\n twenty is  equal to 10 and twenty is greater than 10 ?");
console.log(twenty==ten && twenty> 10);
//test operator using or (||)
console.log("\ntwenty is greater than fifty or twenty is equal to 20?");
console.log(twenty>50||twenty== 20);

console.log("\ntwenty is greater than fifty or twenty is equal to 20?");
console.log(twenty>50||twenty== 20);


console.log("\ntwenty is greater than fifty or twenty is not equal to 20?");
console.log(twenty>50||twenty!= 20);

//array test weather in items included
console.log("\nIs kheer included in my array?");
console.log(items.includes("kheer"));

console.log("\nIs qorma is not included in my array?");
console.log(!items.includes("qorma"));