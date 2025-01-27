const p1 = new Promise(resolve, reject => {
    setTimeout(() => {
        resolve("Promise Resolved Value");
    }, 10000);
  

})
const p2 = new Promise(resolve, reject => {
    setTimeout(() => {
        resolve("Promise Resolved Value");
    },500)
})



async function handlePromise(){
    console.log("Hello World");
    const val = await p1;/* await Keyword: Pauses the execution of the async function until the Promise is resolved or rejected. It can only be used inside async functions.*/
    console.log("namastae javascript");
    console.log(val);

    const val2 = await p2;
    console.log("Namastae Javascript");
    console.log(val2);
}
handlePromise();



/*function getData(){
    p.then((res) => console.log(res));
    console.log("Namastae Javascript");
}



/*async function getData(){
    return 'p';
}

const dataPromise = getData();
console.log(data);

dataPromise.then((res) => console.log(res) )*/