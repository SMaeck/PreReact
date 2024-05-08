import { ubicacion } from "./variables.js"
import { tipoPropiedad } from "./variables.js"

let listaUbicacion = ""

var ubiOk = false
var propOk = false
var metrosOk = false

ubicacion.forEach(element => {
    listaUbicacion += element[0] + ' - ' + element[1] + '\n'    
});

do {
    var ubiElegida = prompt(listaUbicacion)
    
    if (ubiElegida == "A" || ubiElegida == "B" || ubiElegida == "C" || ubiElegida == "D")
        ubiOk = true
    else
        alert("Ubicacion elegida incorrecto. Por favor, vuelva a indicar la Ubicación:")
} while (!ubiOk);

let listaTipoProp = "";

tipoPropiedad.forEach(element => {
    listaTipoProp += element[0] + ' - ' + element[1] + '\n'    
});

do {
    var propElegida = Number.parseInt(prompt(listaTipoProp))
    
    if (propElegida >= 1 && propElegida <= 7)
        propOk = true
    else
        alert("Tipo de Propiedad elegida incorrecto. Por favor, vuelva a indicar el Tipo de Propiedad:")
} while (!propOk);

do {
    var metros = Number.parseInt(prompt("Ingrese la Cantidad de Metros Cuadrados (min 20 - max 500): "))
    
    if (metros >= 20 && propElegida <= 500)
        metrosOk = true
    else
        alert("Cantidad de Metros inválida, Ingréselo nuevamente:")
} while (!metrosOk);

let costoBase = 0
let factor = 0

ubicacion.forEach(element => {
    if (element[0] == ubiElegida)
        costoBase = Number.parseFloat(element[2])
});

tipoPropiedad.forEach(element => {
    if (element[0] == propElegida)
        factor = Number.parseFloat(element[2])
});

let poliza = (metros * costoBase * factor).toFixed(2)

alert("El costo de la Poliza es ==> " + poliza)
