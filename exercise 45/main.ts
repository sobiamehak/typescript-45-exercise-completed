function creatCar(manufacturer,model, ...Options){
    let car = {
        manufacturer:manufacturer,
        model:model

    };


Options.forEach(option=>{
    let [key,value] = option.split(":");
    car[key.trim()] = value.trim();
})
return car;
}
let myCar = creatCar("Toyota","corolla","colour:balck","sunroof : true");
console.log(myCar);