//global scope
const e = 10;

function sum(a){
    return function(b){
        return function(c){
            //outer function scope
            return function(d){
                //local scope
                return a + b + c + d + e
            };
        };
    };

};
console.log(sum(1)(2)(3)(4));