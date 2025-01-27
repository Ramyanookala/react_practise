//Call

/*When to Use call
Use call when:

You need to invoke a function immediately.
You want to explicitly set the value of this and pass arguments individually.
Example:*/
function Introduce(age){
    console.log(`${this.name} is ${age} years old`);

}
const person = {name:'Bob'}
Introduce.call(person,30);
/*When to Use apply
Use apply when:

You need to invoke a function immediately.
You want to explicitly set the value of this and pass arguments as an array.*/
function Introduce(age,job){
    console.log(`${this.name} is ${age} years old and works as a ${job}`);

}
const person1 = {name:'Bob'}
Introduce.apply(person1,[30,'developer']);

/*
When to Use bind
Use bind when:

You want to create a new function with this permanently set.
You need to pass the function to another context or delay its execution.
Example:*/
const person2 = { name: 'Alice' }
function greet(greeting){
    return `${greeting},${this.name}`
}
const boundGreet = greet.bind(person2);
console.log(boundGreet('Hello'))

