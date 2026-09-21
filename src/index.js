import { agregarCamper, listarCampers, buscarCampersPorNombre } from "./campers.js";

const [, , comando, arg1, arg2] = process.argv;

try {
    switch (comando) {

        case 'agregar': {
            await agregarCamper(arg1, arg2);
            console.log('Camper registrado exitosamente ✓');
            break;
        }

        case 'listar': {
            const lista = await listarCampers();

            if (lista.length === 0) {
                console.log('No hay campers aún.');
            } else {
                console.table(lista);
            }

            break;
        }

        default:
            console.log('Uso: Node src/index.js [listar | agregar | buscar]');
    }

} catch (err) {
    console.log('❌ Error:', err.message);
}