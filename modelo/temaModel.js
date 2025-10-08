// 4️⃣ Implementar CRUD de temas

// Modelo (temaModel.js) con funciones crearTema, listarTemas, obtenerTema, actualizarTema, borrarTema.

// Rutas /temas para mostrar, crear, editar y borrar.

// 👉 Ejercicio: Haz que /temas liste todos los temas y permita crear uno nuevo con un formulario.

const temasdb = require("../temasdb");

// Crear tema
function crearTema(titulo){
    return temasdb.prepare("INSERT INTO temas(titulo) VALUES (?)").run(titulo);
}

// Listar tema
function listarTemas(){
    return temasdb.prepare("SELECT * FROM temas").all();
}

// Obtener tema por id
function obtenerTema(id){
    return temasdb.prepare("SELECT * FROM temas WHERE id = ?").get(id);
}

// Actualizar tema
function actualizarTema(id, titulo){
    return temasdb.prepare("UPDATE temas SET titulo = ? WHERE id = ?").run(titulo, id);
}

// borrarTema.
function borrarTema(id){
    return temasdb.prepare("DELETE FROM temas  WHERE id = ?").run(Number(id));
}

module.exports = {crearTema, listarTemas,obtenerTema,actualizarTema,borrarTema}