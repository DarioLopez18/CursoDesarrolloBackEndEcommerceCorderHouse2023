/*->Definir una clase contador
->La clase se creará con un nombre, representando al responsable del contador.
->El contador debe inicializarse en 0
->Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.
->Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
->Definir el método contar, el cual debe incremenetar, tanto en su cuenta individual, como la cuenta global
->Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
->Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
->Realizar prueba de individualidad entre las instancias*/
class Contador{
    constructor(responsable){this.responsable = responsable,this.contadorIndividual=0}
    static contadorGlobal = 0
    getResponsable = () => console.log(this.responsable)
    contar = ()=>{
        this.contadorIndividual += 1
        Contador.contadorGlobal += 1
    }
    getCuentaIndividual = () => console.log(this.contadorIndividual)
    getCuentaGlobal = () => console.log(Contador.contadorGlobal)
}
const contador01 = new Contador('Dario')
const contador02 = new Contador('Ana')
contador01.getResponsable()
contador02.getResponsable()
contador01.contar()
contador01.contar()
contador01.contar()
contador02.contar()
contador02.contar()
contador01.getCuentaIndividual()
contador02.getCuentaIndividual()
contador01.getCuentaGlobal()