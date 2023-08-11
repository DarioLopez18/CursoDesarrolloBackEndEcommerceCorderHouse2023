/*
Escribir un programa ejecutable bajo node.js que realice las siguientes acciones: 
->Abra una terminal en el directorio del archivo y ejecute la instrucción: npm init -y.
    ->Esto creará un archivo especial package.json
->Lea el archivo package.json y declare un objeto con el siguiente formato:

const info = {
    contenidoStr: (contenido del archivo leido en formato string),
    contenidoObj: (contenido del archivo leido en formato objeto),
    size: (tamaño en bytes del archivo)
}

->Muestre por consola el objeto info luego de leer el archivo
->Guardar el objeto llamado info.json dentro de la misma carpeta que package.json
->Incluir el manejo de errores.
->Utilizar el módulo promises de fs dentro de una funcion async/await y utilizar JSON.stringify + JSON.parse para poder hacer las transformaciones 
json->objeto y viceversa
*/