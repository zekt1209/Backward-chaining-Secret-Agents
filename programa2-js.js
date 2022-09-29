// Definimos un arreglo de objetos para los mensajes recibidos con su origen, nombre del agente y en donde esta ubicado
mensajes = [
    {origen:'Francia', nombre: 'Luisa', ubicacion: 'España', veracidad: ''},
    {origen:'España', nombre: 'Alberto', ubicacion: 'Francia', veracidad: ''},
    {origen:'Egipto', nombre: 'Carmen', ubicacion: 'Egipto', veracidad: ''},
    {origen:'Japon', nombre: 'Carmen', ubicacion: 'Francia', veracidad: ''},
];

// Definimos un arreglo de objetos con el nombre de los agentes y su ubicacion
agentes = [
    {nombre: 'Alberto', ubicacion: ''},
    {nombre: 'Luisa', ubicacion: ''},
    {nombre: 'Carmen', ubicacion: ''},
    {nombre: 'Tomas', ubicacion: 'Japon'},
];

// Definimos las variables de los agentes segun su posicion en el arreglo de objetos
alberto = agentes[0];
Luisa = agentes[1];
Carmen = agentes[2];
tomas = agentes[3];

/*
ubicaciones = [
    'Egipto',
    'Francia',
    'Japon',
    'España',
];
*/

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
    mensajes[0].veracidad = true; // Confirmamos que este agente si se encuentra en Francia
    console.log(`Mensaje 1 = ${mensajes[0].veracidad}, Luisa esta en España`);
    agentes[1].ubicacion = 'España';
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
    console.log(`Mensaje 2 = ${mensajes[1].veracidad}, Alberto esta en Francia`);
    agentes[0].ubicacion = 'Francia';
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
    console.log(`Mensaje 3 = ${mensajes[2].veracidad}, Carmen esta en Egipto`)
    agentes[2].ubicacion = 'Egipto';
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
    agentes[2].ubicacion = 'Francia';
}



// Funcion que valida si encuentra elementos duplicados
// En este caso la usamos para validar si despues de aplicar las reglas, no haya 2 agentes en un mismo pais, retorna true o false
const tieneValoresDuplicados = (arreglo) => {
    if (arreglo instanceof Array) {
        for (let i = 0; i < arreglo.length -1; i++) {
            if (arreglo.slice(i + 1).indexOf(arreglo[i.ubicacion] !== -1)) {
                console.log('True')
                return true
            }
            
        }
    } else {
        throw TypeError('El argumento debe de ser un arreglo. ');
    }
}

// Mandamos llamar la funcion validadora
tieneValoresDuplicados(agentes);

// Imprimimos la lista de los agentes con su respectiva ubicacion
console.log(agentes);


