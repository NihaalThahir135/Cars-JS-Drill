module.exports = function problem1(inventory, id){ 
    let car; 
    for(let index = 0; index<inventory.length; index++){ 
        if(inventory[index].id === id){ 
            car = inventory[index]; 
            break; 
        } 
    } 
    return ("Car " + car.id + " is a "+car.car_year + " " + car.car_make +" "+ car.car_model ) 
}