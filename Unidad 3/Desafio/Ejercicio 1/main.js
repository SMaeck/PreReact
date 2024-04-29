const flujoDeCaja = [
    ["Enero", 1500, 1500], 
    ["Febrero", 2500, 2500],
    ["Marzo", 84683, 1155],
    ["Abril", 135353, 1533],
    ["Mayo", 1111535, 5434],
    ["Junio", 4343354, 5434543],
    ["Julio", 435453, 4543],
    ["Agosto", 78351, 7816],
    ["Septiembre", 1878, 95634],
    ["Octubre", 48483, 9433],
    ["Noviembre", 35483, 53133],
    ["Diciembre", 3843, 348133],
]

let ingreso = 0;
let egreso = 0;

for (let i = 0; i < flujoDeCaja.length; i++) {
    ingreso += flujoDeCaja[i][1];
    egreso += flujoDeCaja[i][2];
}

flujoDeCaja.push(["Total", ingreso, egreso]);

console.table(flujoDeCaja)

if (ingreso > egreso){
    console.log("La Empresa ganó dinero");
} else if (ingreso < egreso) {
    console.log("La Empresa perdió dinero");
} else {
    console.log("No hubo Ganancia ni Pérdida")
}