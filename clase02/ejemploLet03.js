function foo(){
    if(true){
        let i = 1 //ambito if
    }
    console.log(i) //ReferenceError: i is not defined 
}

foo()