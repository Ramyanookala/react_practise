function a(){
    for (let i= 0; i<3; i++){ //var i = 0; i<3; i++ the output is different

        setTimeout(function log(){
         console.log(i);
        },i * 1000)
    }
}
a();