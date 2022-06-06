let inventory = require('../problem/inventory.js');
let problem5 = require('../problem/problem5.js');
let problem4 = require("../problem/problem4.js")
const test4 = problem4(inventory)
const result = problem5(test4);
const finalResult = [
    
    1983, 1990, 1995, 1987, 1996,
    1997, 1999, 1987, 1995, 1994,
    1985, 1997, 1992, 1993, 1964,
    1999, 1991, 1997, 1992, 1998,
    1965, 1996, 1995, 1996, 1999
];
console.log(result);
if (JSON.stringify(result) === JSON.stringify(finalResult)) {
    console.log(result);
} else {
    console.log("Results Didn't Match");
}