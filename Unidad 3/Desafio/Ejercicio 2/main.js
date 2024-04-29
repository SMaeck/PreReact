const planes = [
    [150000, 30, 15], 
    [300000, 180, 10], 
    [485000, 60, 23], 
]

let ingreso = 0;
let egreso = 0;

for (let i = 0; i < planes.length; i++) {
    let interes = (planes[i][0] * planes[i][1] * (planes[i][2] / 100)) / 100
    planes[i].push(interes)
}

console.table(planes)
