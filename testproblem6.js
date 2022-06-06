let inventory = require('../problem/inventory.js');
let problem6 = require('../problem/problem6.js');
const result = problem6(inventory);
console.log(result)
const finalResult = ["riolet", "4000CS Quattro", "525", "6 Series", "Q7", "TT"];
if (JSON.stringify(finalResult) === result) {
    console.log(result);
} else {
    console.log("Results Didn't Match");
}