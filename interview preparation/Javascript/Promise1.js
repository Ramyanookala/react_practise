const myPromise = new Promise((resolve, reject) => {
    const success = true;
      
    setTimeout(() => {
        if(success){
            resolve("Data Fetched Successfully");
        }
        else{
            reject("failed to fetch data");
        }
    },2000)

} );

myPromise

.then((result) =>{
    console.log(result);
})
.catch((error) =>{
  console.log(error);
})
.finally(() =>{
    console.log("operation completed");
})
