import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { agregarCamper  } from './campers.js';

const rl = readline.createInterface ({input, output});

try{
    console.log('==========Registro interactivo de campers (ESM)======');
    const nombre = await rl.question('¿Nombre del Camper?: ');
    const stack = await rl.question('¿Stack Tecnologico?: ');

    const guardado= await agregarCamper(nombre, stack);
    console.log('Registrado en JSON:', guardado)
}finally{
    rl.close(); // Esto es obligatorio para que no se quede congelado.
}