let promise = new Promise((resolve, reject) =>{
    setTimeout(() => resolve("Task Done"),1000);

});
promise.then(result => console.log(result));
