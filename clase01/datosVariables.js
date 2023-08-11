/*
Definir variables que almacenen datos nombre, edad, precio, nombres de series y películas 
Mostrar esos valores por consola, incrementar la edad en 1, una serie a la lista y volver a mostrarlas. Compartir la definición en el visual studio code
*/

let nombre = 'Ana'
let edad = 21
let precio = 200.00
let peliculas = ['Hasta el último hombre']

console.log(nombre)
console.log(edad)
console.log(precio)
console.log(peliculas)


edad = edad + 1
peliculas.push('La purga')
console.log('Nuevos valores')

console.log(edad)
console.log(peliculas)