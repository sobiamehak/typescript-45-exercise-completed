var personName = "sobia mehak";
console.log(personName.toLocaleLowerCase());
console.log(personName.toLocaleUpperCase());
console.log(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));