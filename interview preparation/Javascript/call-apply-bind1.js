var person = {
    name:"Roadside Coder",
    hello: function (thing){
       console.log(this.name + "says hello")
    }
}
person.hello(world)