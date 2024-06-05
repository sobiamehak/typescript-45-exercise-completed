let values:number[]=[1,2,3,4,5,6,7,8,9]
for(let onenumber of values){
let ordinalnumber:string
if(onenumber===1){
    ordinalnumber="st"
}else if(onenumber===2){
    ordinalnumber="nd"
}else if(onenumber===3){
    ordinalnumber="rd"

}else{
    ordinalnumber="th"
}
console.log(`${onenumber}${ordinalnumber}`);
}
