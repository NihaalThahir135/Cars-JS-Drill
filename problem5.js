module.exports = function problem5(prob) {
    let less2000 = []
    for (let index = 0; index < prob.length; index++){
        if(prob[index]<2000){
            less2000.push(prob[index])
        }
    } 
    return less2000
}