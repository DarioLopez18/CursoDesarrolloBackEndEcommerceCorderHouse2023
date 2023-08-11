let i = 0 //Scope global

function foo(){
    i = 1 
    let j = 2 //Scope dentro de foo
    if(true){
        console.log(i)
        console.log(j)
    }
}

foo()