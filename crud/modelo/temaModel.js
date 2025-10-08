
// Modelos: manejo de BD para Temas y Enlaces
// 
const db = require("../../db");

// --- TEMAS ---

function crearTema(tema) {
  const r = db
    .prepare("INSERT INTO temas (tema) VALUES (?)")
    .run(String(tema).trim());
  return obtenerTema(r.lastInsertRowid);
}

function obtenerTema(id) {
  return db
    .prepare("SELECT * FROM temas WHERE id = ?")
    .get(Number(id));
}

function listarTemasOrdenados() {
  return db
    .prepare("SELECT * FROM temas ORDER BY votos DESC, id ASC")
    .all();
}

function actualizarTema(id, nuevo) {
  db.prepare("UPDATE temas SET tema = ? WHERE id = ?")
    .run(String(nuevo).trim(), Number(id));
  return obtenerTema(id);
}

function borrarTema(id) {
  const ex = obtenerTema(id);
  if (!ex) return null;
  db.prepare("DELETE FROM temas WHERE id = ?").run(Number(id));
  return ex;
}

function votarTema(id, dir) {
  const delta = dir === "down" ? -1 : 1;
  db.prepare(
    "UPDATE temas SET votos = MAX(0, votos + ?) WHERE id = ?"
  ).run(delta, Number(id));
  return db
    .prepare("SELECT votos FROM temas WHERE id = ?")
    .get(Number(id)).votos;
}

// --- ENLACES ---

function crearEnlace(tema_id, titulo, url) {
  db.prepare(
    "INSERT INTO enlaces (tema_id,titulo,url) VALUES (?,?,?)"
  ).run(Number(tema_id), String(titulo), String(url));
}

function listarEnlacesOrdenados(tema_id) {
  return db
    .prepare(
      "SELECT * FROM enlaces WHERE tema_id = ? ORDER BY votos DESC, id ASC"
    )
    .all(Number(tema_id));
}

function votarEnlace(tema_id, id, dir) {
  const delta = dir === "down" ? -1 : 1;
  db.prepare(
    "UPDATE enlaces SET votos = MAX(0, votos + ?) WHERE id = ? AND tema_id = ?"
  ).run(delta, Number(id), Number(tema_id));
  return db
    .prepare(
      "SELECT votos FROM enlaces WHERE id = ? AND tema_id = ?"
    )
    .get(Number(id), Number(tema_id)).votos;
}

function borrarEnlace(tema_id, id) {
  const ex = db
    .prepare("SELECT * FROM enlaces WHERE id = ? AND tema_id = ?")
    .get(Number(id), Number(tema_id));
  if (!ex) return null;
  db.prepare("DELETE FROM enlaces WHERE id = ? AND tema_id = ?")
    .run(Number(id), Number(tema_id));
  return ex;
}

module.exports = {
  crearTema,
  listarTemasOrdenados,
  obtenerTema,
  actualizarTema,
  borrarTema,
  votarTema,
  crearEnlace,
  listarEnlacesOrdenados,
  votarEnlace,
  borrarEnlace
};
