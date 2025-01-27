//lexical scope

var username="Ramya"
// global scope
   function local(){
//local scope
     console.log(username);
   }
local();
//output :Ramya

function local1(){

    var username1="Hello";
}
    console.log(username1);
local1();

// Reference error username is not defined.