module.exports = function problem3(inventory){
    let model = [];
    for(let index = 0;index < inventory.length;index++){
        model.push(inventory[index].car_model);
    }
    return model.sort((a, b) => (a.toLowerCase() > b.toLowerCase() ? 1: -1));
}