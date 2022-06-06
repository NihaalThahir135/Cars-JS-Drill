module.exports = function problem4(inventory){
    let carYear = [];
    for(let index = 0;index < inventory.length;index++){
        carYear.push(inventory[index].car_year);
    }

    return carYear;
}