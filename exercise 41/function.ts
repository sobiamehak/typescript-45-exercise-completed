function show_megician(megician:string[]){
    megician.forEach(name=>console.log(name))
}
function make_great(megician:string[]){
 return megician.map(name=>`The great ${name}`)
}
let megician_name=["smith","harry","john"]
let megicians= make_great(megician_name);
console.log(megicians);
show_megician(megicians)