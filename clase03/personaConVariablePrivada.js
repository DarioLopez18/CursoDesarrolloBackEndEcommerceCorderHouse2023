class Persona{
    #fullname
    constructor(nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido
        this.#fullname = `${this.nombre} ${this.apellido}`    
    }

    getFullName = () => this.#fullname

    #metodoPrivado = ()=> 'Metodo private'
}

let persona = new Persona('Dario','Lopez')

console.log(persona.getFullName())