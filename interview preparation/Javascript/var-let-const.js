/* 1.var is functional scoped or global scoped.
    :If you create a variable outside of a function, you can use it anywhere in your code.
    :If you create a variable inside a function, you can only use it within that function.

 2. let and const is block scoped */
 ex:1
 /* a = 10;
function f() {
    let b = 9
    console.log(b);
    console.log(a);
}
f();*/

ex:2
let a1 = 10;
function f(){
    if(true){
        let b =9;
        console.log(b);
    }
    console.log(b);
}
f();
console.log(a1);

ex:3
let a = 10

// It is not allowed
let a = 10

// It is allowed
a = 10

ex:4 /* The below code explains the behaviour of let variables when they are re-declared in the different scopes.*/
let a2 = 10
if (true) {
    let a2 = 9
    console.log(a2) // It prints 9
}
console.log(a2) // It prints 10