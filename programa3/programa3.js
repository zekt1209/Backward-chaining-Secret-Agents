// Definimos las señales de trafico 

                // Valor : (verde, rojo) 
seniales = [
    {nombre: 'u1', valor: 'verde'},
    {nombre: 'u2', valor: ''},
    {nombre: 'u3', valor: ''},
    {nombre: 'u4', valor: ''},
    {nombre: 'u5', valor: ''},
    {nombre: 'u6', valor: ''},
    {nombre: 'u7', valor: ''},
    {nombre: 'u8', valor: ''},
    {nombre: 'l1', valor: ''},
    {nombre: 'l2', valor: ''},
    {nombre: 'l3', valor: ''},
    {nombre: 'l4', valor: ''},
    {nombre: 'l5', valor: ''},
    {nombre: 'l6', valor: ''},
];

// Le asignamos nombres a las seniales para que sean mas entendibles

u1 = seniales[0];
u2 = seniales[1];
u3 = seniales[2];
u4 = seniales[3];
u5 = seniales[4];
u6 = seniales[5];
u7 = seniales[6];
u8 = seniales[7];
l1 = seniales[8];
l2 = seniales[9];
l3 = seniales[10];
l4 = seniales[11];
l5 = seniales[12];
l6 = seniales[13];

                // Valor : (libre, ocupada) 
vias = [
    {nombre: 's1', valor: 'ocupada'},
    {nombre: 's2', valor: ''},
    {nombre: 's3', valor: 'ocupada'},
    {nombre: 's4', valor: ''},
    {nombre: 's5', valor: 'ocupada'},
];

// Le asignamos nombres a las vias para que sean mas entendibles

s1 = vias[0];
s2 = vias[1];
s3 = vias[2];
s4 = vias[3];
s5 = vias[4];

// Empezamos a definir las reglas con las que vamos a estar trabajando

var totalLength = seniales.length + vias.length;
console.log(totalLength); 

// Creamos un bucle àra recorrer el las reglas por cada contenido de nuestro array
for (i = 0; i < totalLength; i++){
    // Regla 1
    if (u1.valor === 'verde') {
        l1.valor = 'rojo';
    }

    // Regla 2
    if (u6.valor === 'verde') {
        l6.valor = 'rojo';
    }

    // Regla 3
    if (s1.valor === 'ocupada') {
        u2.valor = 'rojo';
    }

    // Regla 4
    if (s2 === 'ocupada') {
        l2.valor = 'rojo';
    }

    // Regla 5
    if (s3.valor === 'ocupada') {
        u3.valor = 'rojo';
    }

    // Regla 6
    if (s3.valor === 'ocupada') {
        u4.valor = 'rojo';
    }

    // Regla 7
    if (s4.valor === 'ocupada') {
        u5.valor = 'rojo';
    } else {
        s4.valor = 'libre'
    }

    // Regla 8
    if (s5.valor === 'ocupada') {
        l5.valor = 'rojo';
    }

    // Regla 9
    if ((u3.valor === 'rojo' && l3.valor === 'rojo') ||  (u5.valor === 'rojo' && l5.valor === 'rojo')) {
        u1.valor = 'rojo';
    } else {
        l3.valor = 'verde';
        u5.valor = 'verde';
    }

    // Regla 10
    if ((u3.valor === 'rojo' && l3.valor === 'rojo') ||  (u5.valor === 'rojo' && l5.valor === 'rojo')) {
        l1.valor = 'rojo';
    }

    // Regla 11
    if ((u2.valor === 'rojo' && l2.valor === 'rojo') ||  (u4.valor === 'rojo' && l4.valor === 'rojo')) {
        u6.valor = 'rojo';
    }

    // Regla 12
    if ((u2.valor === 'rojo' && l2.valor === 'rojo') ||  (u4.valor === 'rojo' && l4.valor === 'rojo')) {
        l6.valor = 'rojo';
    }

    // Regla 13
    if (u2.valor === 'rojo' && l2.valor === 'rojo') {
        u7.valor = 'rojo';
    }

    // Regla 14
    if (u5.valor === 'rojo' && l5.valor === 'rojo') {
        u8.valor = 'rojo';
    }

    // Regla 15
    if (u3.valor === 'verde') {
        u4.valor = 'rojo';
    }

    // Regla 16
    if (l3.valor === 'verde') {
        l4.valor = 'rojo';
    }

    // Regla 17
    if (u2.valor === 'verde') {
        l2.valor = 'rojo';
    }

    // Regla 18
    if (u3.valor === 'verde') {
        l3.valor = 'rojo';
    }

    // Regla 19
    if (u4.valor === 'verde') {
        l4.valor = 'rojo';
    }

    // Regla 20
    if (u5.valor === 'verde') {
        l5.valor = 'rojo';
    }

    // Regla 21
    if (u1.valor === 'verde' || l1.valor === 'verde') {
        u7.valor = 'rojo';
    }

    // Regla 22
    if (u6.valor === 'verde' || l6.valor === 'verde') {
        u8.valor = 'rojo';
    }
}





console.log('Conclusiones: ');
console.log('Seniales: ');
console.log(seniales);
console.log('Vias: ');
console.log(vias);
// console.log(seniales[0]);
// console.log(seniales[1]);
// console.log(u1.valor);
// console.log(s1.valor);




// Logica JS 
const btnEjecutar = document.querySelector('#btnEjecutar');
const emptyImage = document.querySelector('#emptyImage')



// Creamos el evento que queremos que suceda
btnEjecutar.addEventListener('click', switchImage);


// Creamos la funcion que vamos a mandar llamar en el eventListener
function switchImage() {
    emptyImage.classList.add('inactive');
}
