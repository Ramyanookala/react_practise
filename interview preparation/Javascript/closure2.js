
let count=0;
function printCount() {
     if(count === 0){
        let count = 1;//shadowing
        console.log(count)// 1 // let is block scoped
     }

     console.log(count);// 0
}
printCount();