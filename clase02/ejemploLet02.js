function foo(){
    let i = 0 //ambito foo
    if(true){
        let i = 1 //ambito if
        console.log(i) //1
    }
    console.log(i) //0
}

foo()