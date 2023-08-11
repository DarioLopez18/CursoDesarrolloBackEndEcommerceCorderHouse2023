let modo = "Calculos"

async function ejemploImport(){
    if(modo==calculos){
        const {default:calculadora} = await import ('./calculadora.js')
        let calculadora2 = new calculadora()
        console.log(calculadora2.sumar(1,2))
    }
}