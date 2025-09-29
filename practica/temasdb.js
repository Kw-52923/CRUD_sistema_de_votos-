// 3️⃣ Crear base de datos SQLite

// Usa better-sqlite3.

// Crea db.js con tablas temas y enlaces.

// Prueba un INSERT y un SELECT.

// 👉 Ejercicio: Inserta manualmente un tema "Programar en Node" y muéstralo con console.log.
const Database = require("better-sqlite3");


const temasdb = new Database("data.temasdb");
temasdb.pragma("foreing_keys = ON");

temasdb.exec(`
    CREATE TABLE IF NOT EXISTS temas (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tema TEXT NOT NULL,
    votos INTEGER NOT NULL DEFAULT 0
    );
    CREATE TABLE IF NOT EXISTS enlaces(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tema_id TEXT NOT NULL,
    titulo TEXT NOT NULL,
    url TEXT NOT NULL,
    votos INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY (tema_id) REFERENCES temas(id) ON DELETE CASCADE
    );
    `)
    // Insertar tema
temasdb.prepare(`INSERT INTO temas (tema) VALUES (?)`).run("Programar en Node");

// Seleccionar todos los temas
const temas = temasdb.prepare(`SELECT * FROM temas`).all();
console.log(temas);


module.exports = temasdb;