/*
Definir la clase Ticket manager
La clase debe contar con una variable privada 'precioBaseDeGanancia', la cual añadirá un costo adicional al precio de cada evento
Debe contar con el método 'Agregar evento' el cual recibirá los siguientes parámetros: 
    ->nombre
    ->lugar
    ->precio
    ->capacidad (50 por defecto)
    ->fecha (hoy por defecto)
el método deberá crear además el campo id autoincrementable y el campo participantes que siempre se iniciará con un arreglo vacío
Debe contar con un método agregar usuario que cual recibirá
    ->id del evento (debe existir,agregar validaciones)
    ->id del usuario
el método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validacion de fecha y capacidad se evitará para no
    alargar el reto)Si todo está en orden debe agregar el id del usuario en el arreglo 'Participantes' de ese evento

Debe contar con un método 'Poner evento en gira' el cual recibirá:
    ->id del evento
    ->nueva fecha
    ->nueva localidad
El metodo debe copiar el evento existente con una nueva localidad, fecha y id y sus participantes vacios (usar spread operator para el resto de las propiedades)


 */

class ticketManager {
    #precioBaseDeGanancia 
    constructor(){
        this.#precioBaseDeGanancia = 0.15
        this.eventos = []
    }
    getNextID = ()=>{
        let count = this.eventos.length
        if(count>0){
            return this.eventos[count-1].id + 1
        }else{
            return 1
        }
    }
    agregarEvento = (nombre,lugar,precio,capacidad,fecha)=>{
        const evento = {
            id: this.getNextID(),
            nombre: nombre,
            lugar: lugar,
            precio: precio + precio*0.15,
            capacidad: capacidad ?? 50,
            fecha: fecha || new Date().toLocaleDateString(),
            participantes: []
        }
        this.eventos.push(evento)
    }
    agregarUser = (idEvent,idUser)=>{
        const validateEvent = this.eventos.some(element =>element.id == idEvent)
        if(!validateEvent) return console.log('No existe el evento')
        const validateUser = this.eventos.some(element=>{
            if(element.id == idEvent){
               const result = element.participantes.includes(idUser)
                return result
            }
        })
        if(!validateUser){
            this.eventos.forEach(element=>{
                if(element.id == idEvent){
                    element.participantes.push(idUser)
                }
            })
        }else{
            return console.log('El participante ya existe')
        }
    }
}
const ticketManager01 = new ticketManager()
ticketManager01.agregarEvento('Lolapalooza','Mendoza',500)
ticketManager01.agregarEvento('Cosquin rock','Cordoba',200,30,'10/6/2023')
ticketManager01.agregarEvento('Fiesta de la cerveza','Mendoza',500)

ticketManager01.agregarUser(1,1)
ticketManager01.agregarUser(1,1)
ticketManager01.agregarUser(1,2)
ticketManager01.agregarUser(1,2)
ticketManager01.agregarUser(1,3)
ticketManager01.agregarUser(2,1)
ticketManager01.agregarUser(2,1)
ticketManager01.agregarUser(2,2)
ticketManager01.agregarUser(2,2)
ticketManager01.agregarUser(2,3)
ticketManager01.agregarUser(3,1)
ticketManager01.agregarUser(3,1)
ticketManager01.agregarUser(3,2)
ticketManager01.agregarUser(3,2)

console.log(ticketManager01.eventos)