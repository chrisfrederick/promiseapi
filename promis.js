const prom = new Promise((resolve, reject)=>{
    if(true){
        resolve("Congrats")
    }else{
        reject("Not Happening")
    }
})



prom
.then(res=>{console.log(res)})
.catch(err=>{console.log(err)})