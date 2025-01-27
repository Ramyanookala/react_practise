const numbers = [1, 2, 3, 4, 5];
const squared = numbers.map(num => num * num);

const person = {
    name:'Alice',
    greet: () =>{
        console.log(`Hello From ${this.name}`);
    }
}

//regular func:

function Car(make, model){
   this.make = make;
   this.model = model;

}
const myCar = new Car("Toyota","Corolla");