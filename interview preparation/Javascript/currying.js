function add(a){
    return function(b){
        return a + b;
    }
}
const addTwo = add(2);
console.log(addTwo(3));

/*Advantages of Currying:
Reusability:

Currying makes functions more reusable. For example, you can create pre-configured functions.*/
const multiply = (a) => (b) => a * b;
const double = multiply(2);
const triple = multiply(3);
console.log(double(5));
console.log(triple(5));