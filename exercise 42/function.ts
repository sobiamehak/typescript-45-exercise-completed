function show_megician(megician:string[]){
megician.forEach(name1=>console.log(name1))
} 
function make_great(megicians:string[]){
return megicians.map(name=>`The great${name}`)
}
let megiciansName= ["Ali","alina","hina"]
 let great_megician = make_great(megiciansName);
 console.log( great_megician);
 show_megician( great_megician);