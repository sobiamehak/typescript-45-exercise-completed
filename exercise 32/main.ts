let currentUsersname:string[]=["Ali","Danish","Fahad","Areeba","Zeeshan"]
let newUsername:string[]=["ali","hina","Danish","soni","fozia"]
newUsername.forEach(newoneuser=>{
    let our_condition=currentUsersname.some(currentoneuser=>
        currentoneuser.toLowerCase()===newoneuser.toLowerCase())


    
    if(our_condition){
console.log(`sorry,${newoneuser} is already taken`)

    }else{
        console.log(`This username${newoneuser} is available`)
    }
})
