const radius = [1,2,3];

const area = function(radius){
    return Math.PI * radius * radius;
}
const diameter = function(radius){
    return 2 * radius;
}
const circumeference = function(radius){
    return 2 * Math.PI * radius;
}
const caluculate = function(radius,logic) {
    const output = []
    for(i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}

console.log(calculate(radius,area));
console.log(caluculate(radius,diameter));
console.log(calculate(radius,circumeference));

