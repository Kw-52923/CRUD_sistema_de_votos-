const express = require("express")
const {crearTema,listarTema} = require("../modelo/temaModel.js");
const r = express.Router();

// 5️⃣ Implementar CRUD de enlaces (dentro de un tema)

// Modelo: crearEnlace, listarEnlaces, actualizarEnlace, borrarEnlace.

// Rutas: /temas/:id/enlaces.

// 👉 Ejercicio: Permite agregar un enlace con título + URL a un tema.

r.get("/", (req,res) => res.render("temas/index", { temas : listarTema()}));
r.post("/", (req,res) =>{
    crearTema(req.body.titulo);
    res.redirect("/temas");
});

module.exports = r;