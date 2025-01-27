/*Arrow Functions:
Introduced in ES6 (ECMAScript 2015) as a more concise way to define functions.
Syntax: (parameters) => expression or (parameters) => { statements }.
Do not have their own this, arguments, super, or new.target bindings. Instead, they inherit these from the enclosing scope.
Cannot be used as constructors (i.e., you cannot use new with arrow functions).
Best suited for short, simple functions, especially when you want to maintain a shorter, more readable syntax.
Automatically return the result of the expression if there are no curly braces {} around the function body.
*/
Example:

 const add = (a,b) => a + b;
 const greet = name => `Hello, ${name}!`


/*Regular Functions:
The traditional way of defining functions in JavaScript.
Syntax: function functionName(parameters) { statements }.
Have their own this, arguments, super, and new.target bindings.
Can be used as constructors with the new keyword to create instances.
More flexible and suitable for complex functions, especially those that require custom binding of this or use of arguments.
*/
function multiply(a,b){
    return a * b;
}
function person(name){
    this.name = name;
}

/*Use arrow functions for concise, simple functions that don’t require their own this binding or other special features.
Use regular functions when you need more control over this, when defining methods within classes, or when working with constructor functions.
Arrow functions are often preferred in modern JavaScript code for their readability and shorter syntax, but regular functions are still essential for certain scenarios.*/