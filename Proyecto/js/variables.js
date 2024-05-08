const tipoPropiedad = [[1, "Casa", 1.009],
                       [2, "P.H.", 1.005], 
                       [3, "Dto. Edificio", 1.002],
                       [4, "Barrio Privado", 1.019],
                       [5, "Oficina", 1.039],
                       [6, "Local comercial", 1.041],
                       [7, "Deposito logistica", 1.092]
]

const ubicacion = [["A", "CABA", 1.012],
                   ["B", "Tandil", 1.004], 
                   ["C", "Costa Atlantica", 1.029],
                   ["D", "Patagonia Argentina", 1.000]
]

function listadoTipoPropString(){
    let listadoTipoProp = ""

    tipoPropiedad.forEach(element => {
        listadoTipoProp += element[0] + ' - ' + element[1] + '\n'    
    });

    return listadoTipoProp
}

function listadoUbicacionesString(){
    let listadoUbicaciones = ""

    ubicacion.forEach(element => {
        listadoUbicaciones += element[0] + ' - ' + element[1] + '\n'    
    });

    return listadoUbicaciones
}

function buscarFactor(propElegida){
    let cB = 0

    tipoPropiedad.forEach(element => {
        if (element[0] == propElegida)
            cB =  Number.parseFloat(element[2])
    });

    return cB
}

function buscarCostoBase(ubiElegida){
    let ft = 0

    ubicacion.forEach(element => {
        if (element[0] == ubiElegida)
            ft = Number.parseFloat(element[2])
    });

    return ft
}

export {tipoPropiedad, ubicacion, listadoTipoPropString, listadoUbicacionesString, buscarFactor, buscarCostoBase}
