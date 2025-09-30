// 4️⃣ Implementar CRUD de temas

// Modelo (temaModel.js) con funciones crearTema, listarTemas, obtenerTema, actualizarTema, borrarTema.

// Rutas /temas para mostrar, crear, editar y borrar.

// 👉 Ejercicio: Haz que /temas liste todos los temas y permita crear uno nuevo con un formulario.

const temasdb = require("./temasdb");

// Crear tema
function crearTema(tema){
    return temasdb.prepare("INSERT INTO temas(tema) VALUES (?)").run(tema);
}

// Listar tema
function listarTemas(tema){
    return temasdb.prepare("SELECT * FROM temas").all();
}

// Obtener tema por id
function obtenerTema(id){
    return temasdb.prepare("SELECT * FROM temas WHERE id = ?").get(id);
}

// Actualizar tema
function actualizarTema(id, nuevoTema){
    return temasdb.prepare("UPDATE temas SET tema = ? WHERE id = ?").run(nuevoTema.trim(), id);
}

// borrarTema.
function borrarTema(id){
    return temasdb.prepare("DELETE FROM temas  WHERE id = ?").run(Number(id));
}
