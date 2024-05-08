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

function buscarFactor(propElegida){
    tipoPropiedad.forEach(element => {
        if (element[0] == propElegida)
            return Number.parseFloat(element[2])
    });

    return 0
}

function buscarCostoBase(ubiElegida){
    ubicacion.forEach(element => {
        if (element[0] == ubiElegida)
            return Number.parseFloat(element[2])
    });

    return 0
}


export {tipoPropiedad, ubicacion, buscarFactor, buscarCostoBase}
