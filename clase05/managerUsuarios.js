/*
->El manager debe vivir en una clase en un archivo externo llamado ManagerUsuarios.js
->El metodo 'Crear usuario' debe recibir un objeto con los campos:
    ->Nombre
    ->Apellido
    ->Edad
    ->Curso
    El método debe guardar un usuario en un archivo 'Usuarios.json', deben guardarlos dentro de un arreglo, ya que se trabajan con múltiples usuarios

    El metodo 'Consultar usuarios' debe poder leer el json previamente generado con el arreglo de usuarios y parsearlo, para poder entregarlo en un formato
    manipulable
*/

const fs = require('fs')

class ManagerUser {
    constructor(filename) {
        this.filename = filename
        this.format = 'utf-8'
    }

    createUser = async (name, lastname, age, course) => {
        const user = { name, lastname, age, course }
        const list = await this.getUser() // Conseguimos la lista de todos los users
        list.push(user) // Agregamos a la lista el nuevo user

        // Escribimos el archivo (o se sobreescribe si ya existe)
        await fs.promises.writeFile(this.filename, JSON.stringify(list))
    }

    getUser = async () => {
        try {
            // Leer contenido del archivo
            const data = await fs.promises.readFile(this.filename, this.format)
            const dataObj = JSON.parse(data) // Convertimos de string a objeto

            return dataObj
        } catch (error) {
            // Si no existe el archivo, retornamos una lista vacia
            console.log('No se encontro el archivo, se devuelve vacio')
            return []
        }
    }

}

async function run() {
    const manager = new ManagerUser('users.json')
    await manager.createUser('R2', 'Verbel', 23, 'front')

    console.log(await manager.getUser())
}

run()