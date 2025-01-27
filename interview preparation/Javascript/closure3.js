//Write a function that would allow to do this.

function createBase(num){
    return function(innerNum){
        console.log(num + innerNum);
    }

}


var addSix = createBase(6);
addSix(10);
addSix(21);