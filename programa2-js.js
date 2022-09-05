// Definimos un arreglo de objetos para los mensajes recibidos con su origen, nombre del agente y en donde esta ubicado
mensajes = [
    {origen:'Francia', nombre: 'Luisa', ubicacion: 'España', veracidad: ''},
    {origen:'España', nombre: 'Alberto', ubicacion: 'Francia'},
    {origen:'Egipto', nombre: 'Carmen', ubicacion: 'Egipto'},
    {origen:'Japon', nombre: 'Carmen', ubicacion: 'Francia'},
];

// Definimos un arreglo de objetos con el nombre de lops agentes y su ubicacion
agentes = [
    {nombre: 'Alberto', ubicacion: ''},
    {nombre: 'Luisa', ubicacion: ''},
    {nombre: 'Carmen', ubicacion: ''},
    {nombre: 'Tomas', ubicacion: 'Francia'},
];

// Definimos las variables de los agentes segun su posicion en el arreglo de objetos
alberto = agentes[0];
Luisa = agentes[1];
Carmen = agentes[2];
tomas = agentes[3];


ubicaciones = [
    'Egipto',
    'Francia',
    'Japon',
    'España',
];

/*
for (var i = 0; i < agentes.length; i++){
    if (mensajes.nombre === 'Tomas' && )
}
*/



// El mensaje de Francia (Luisa esta en España) da lugar a:

// Regla 1
if (tomas.ubicacion === 'Francia') {
    mensajes[0].veracidad = false;
    console.log(`Mensaje 1 = ${mensajes[0].veracidad}, Luisa no esta en España`);
}

// Regla 2
if (tomas.ubicacion != 'Francia') {
    mensajes[0].veracidad = true;
    console.log(`Mensaje 1 = ${mensajes[0].veracidad}, Luisa esta en españa`);
}


// El mensaje de España (Alberto esta en Francia) da lugar a:

// Regla 3
if (tomas.ubicacion === 'España') {
    mensajes[1].veracidad = false;
    console.log(`Mensaje 2 = ${mensajes[1].veracidad}, Alberto no esta en Francia`);
}

// Regla 4
if (tomas.ubicacion != 'España') {
    mensajes[1].veracidad = true;
    console.log(`Mensaje 2 = ${mensajes[1].veracidad}, Alberto esta en francia`);
}


// El mensaje de Egipto (Carmen esta en Egipto) da lugar a:

// Regla 5
if (tomas.ubicacion === 'Egipto') {
    mensajes[2].veracidad = false;
    console.log(`Mensaje 3 = ${mensajes[2].veracidad}, Carmen no esa en Egipto`);
}

// Regla 6
if (tomas.ubicacion != 'Egipto') {
    mensajes[2].veracidad = true;
    console.log(`Mensaje 3 = ${mensajes[2].veracidad}, Carmen esta en egipto`)
}


// El mensaje de Japon (Carmen esta en Francia) da lugar a

// Regla 7
if (tomas.ubicacion === 'Japon') {
    mensajes[3].veracidad = false;
    console.log(`Mensaje 4 = ${mensajes[3].veracidad}, Carmen no esta en Francia`);
}

// Regla 8
if (tomas.ubicacion != 'Japon') {
    mensajes[3].veracidad = true;
    console.log(`Mensaje 4 = ${mensajes[3].veracidad}, Carmen esta en Francia`);
}



