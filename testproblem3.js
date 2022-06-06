let inventory = require('../problem/inventory.js');
let problem3 = require('../problem/problem3.js');
const result = problem3(inventory);
console.log(result);
const finalResult = [
    '300M',
    '4000CS Quattro',
    '525',
    '6 Series',
    'Accord',
    'Aerio',
    'Bravada',
    'Camry',
    'Cavalier',
    'Ciera',
    'Defender Ice Edition',
    'E-Class',
    'Econoline E250',
    'Escalade',
    'Escort',
    'Esprit',
    'Evora',
    'Express 1500',
    'Familia',
    'Fortwo',
    'G35',
    'Galant',
    'GTO',
    'Intrepid',
    'Jetta',
    'LSS',
    'Magnum',
    'Miata MX-5',
    'Montero Sport',
    'MR2',
    'Mustang',
    'Navigator',
    'Prizm',
    'Q',
    'Q7',
    'R-Class',
    'Ram Van 1500',
    'Ram Van 3500',
    'riolet',
    'Sebring',
    'Skylark',
    'Talon',
    'Topaz',
    'Town Car',
    'TT',
    'Windstar',
    'Wrangler',
    'Wrangler',
    'XC70',
    'Yukon'

]
if (JSON.stringify(result) === JSON.stringify(finalResult)) {
    console.log(result);
} else {
    console.log("Results Didn't Match");
}