/*
Definiremos la funcion mostrarLista, la cual recibirá un arreglo con elementos como parámetro.
->Si la lista está vacía,devolver un mensaje indicando 'Lista vacía'
->Si la lista cuenta con elementos, mostrarlos 1 por 1 en consola. Finalizar el proceso indicando la longitud de la lista (usar template String)
->Invocar la función con los casos de prueba
 */

const mostrarLista = lista =>{
    if(lista.length == 0) return console.log('La lista está vacía')
    console.log('--------------------')
    const count = lista.length 
    lista.forEach(element => console.log(element));
    console.log(`La longitud de la lista es: ${count}`)
    console.log('--------------------')
}

mostrarLista([])
mostrarLista([1,2,3,4])
mostrarLista(['Ana','Lio'])



