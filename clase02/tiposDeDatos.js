let people = [
    {id:1, first_Name:'Luz',last_name:'Escalante',age:25,gender:'F'},
    {id:2, first_Name:'Bruno',last_name:'Guerra',age:18,gender:'M'},
    {id:3, first_Name:'Marisol',last_name:'Cadena',age:23,gender:'M'},
    {id:4, first_Name:'Franco',last_name:'Chachagua',age:30,gender:'M'}
]

let person = people.find(element => element.id == 3)

console.log(person)

/*

Los tipos de datos son:
    ->Array
    ->Object
    ->Number
    ->String
    ->Boolean
*/