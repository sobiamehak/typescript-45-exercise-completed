function show_megician(megician:string[]){
    megician.forEach(name1=>console.log(name1))
    } 
    function make_great(megicians:string[]){
    return megicians.map(name=>`The great ${name}`)
    }
    let megiciansName= ["Ali","alina","hina"]
  //making a copy of array with slice
  let copymegician_name = megiciansName.slice()
 let megicians_great = make_great(copymegician_name);
 show_megician ( megiciansName)
 show_megician ( megicians_great);
