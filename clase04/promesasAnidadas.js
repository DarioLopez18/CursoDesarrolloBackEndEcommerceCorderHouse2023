const promesa = new Promise((resolve,rejected)=>setTimeout(()=>resolve(1),1000))

    .then(result=>{
        console.log(result)
        return result*2
    })

    .then(result=>{
        console.log(result)
        return result * 2
    })
    
    .then(result=>{
        console.log(result)
    })

console.log(promesa)
