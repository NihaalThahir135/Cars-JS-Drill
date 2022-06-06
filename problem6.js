module.exports = function problem6(inventory) {
    let BMWAndAudi = []
    for (let index = 0; index < inventory.length; index++) {
        if(inventory[index].car_make === "BMW" || inventory[index].car_make === "Audi" ){
            BMWAndAudi.push(inventory[index].car_model)
        }
    }
    return JSON.stringify(BMWAndAudi)
}