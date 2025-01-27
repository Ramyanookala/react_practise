

// global scope
function Subscribe(){
    var name="Heloo";
    //inner scope2
      function displayName(){
        //inner scope
        console.log(name);

      }
      displayName();

}
Subscribe();

//output:Heloo