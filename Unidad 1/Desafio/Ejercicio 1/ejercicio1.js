alert("Por favor, para calcular el Punto de Equilibrio se complete los siguientes datos solicitados");

let costoFijo = prompt("Ingrese el monto del Costo Fijos:");
let costoVariable = prompt("Ingrese el monto del Costo Variable:");
let precioVenta = prompt("Ingrese el precio de venta:");

let puntoEquilibrio = costoFijo / (precioVenta - costoVariable);

console.log("El Punto de Equilibrio es ==> ", puntoEquilibrio);
