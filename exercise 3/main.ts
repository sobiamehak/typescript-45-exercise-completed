let  personName :string = "sobia mehak";
//uppercase 
console.log (personName.toLocaleLowerCase());
//lowercase
console.log (personName.toLocaleUpperCase());
//titlecase
console.log (personName.replace(/\b\w/g,(char) => char.toUpperCase()));
