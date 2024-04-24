alert("Programa para cálculo presupuestario");

let ingresoTotal = prompt("Informe el Ingreso Total del que dispone:");

let pptoGastosNecesarios = ingresoTotal * 0.5
let pptoGastosOpcionales = ingresoTotal * 0.3
let pptoAhorro = ingresoTotal * 0.2

console.log("El presupuesto para Gastos Necesarios asciende a ==> $", pptoGastosNecesarios);
console.log("El presupuesto para Gastos Opcionales asciende a ==> $", pptoGastosOpcionales);
console.log("Y el presupuesto para Ahorro e Inversión asciende a ==> $", pptoAhorro);
