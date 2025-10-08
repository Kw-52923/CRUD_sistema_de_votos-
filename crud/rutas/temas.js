
// Rutas / Controladores de Temas y Enlaces


const express = require("express");
const {
  listarTemasOrdenados,
  crearTema,
  obtenerTema,
  actualizarTema,
  borrarTema,
  votarTema,
  crearEnlace,
  listarEnlacesOrdenados,
  votarEnlace,
  borrarEnlace
} = require("../modelo/temaModel");

const r = express.Router();

// LISTAR TEMAS
r.get("/", (req, res) => {
  res.render("temas/index", { temas: listarTemasOrdenados() });
});

// CREAR TEMA
r.post("/", (req, res) => {
  const t = (req.body?.tema || "").trim();
  if (t) crearTema(t);
  res.redirect("/temas");
});

// VER TEMA + ENLACES
r.get("/:id", (req, res) => {
  const t = obtenerTema(req.params.id);
  if (!t) return res.status(404).send("No encontrado");
  res.render("temas/show", {
    t,
    enlaces: listarEnlacesOrdenados(req.params.id)
  });
});

// EDITAR TEMA
r.post("/:id/editar", (req, res) => {
  const nuevo = (req.body?.tema || "").trim();
  if (nuevo) actualizarTema(req.params.id, nuevo);
  res.redirect(`/temas/${req.params.id}`);
});

// BORRAR TEMA
r.post("/:id/borrar", (req, res) => {
  borrarTema(req.params.id);
  res.redirect("/temas");
});

// VOTAR TEMA
r.post("/:id/votar", (req, res) => {
  const dir = req.body?.dir === "down" ? "down" : "up";
  const votos = votarTema(req.params.id, dir);
  if (req.headers.accept?.includes("application/json"))
    return res.json({ votos });
  res.redirect(`/temas/${req.params.id}`);
});

// CREAR ENLACE
r.post("/:id/enlaces", (req, res) => {
  const { titulo = "", url = "" } = req.body || {};
  if (titulo && url) crearEnlace(req.params.id, titulo, url);
  res.redirect(`/temas/${req.params.id}`);
});

// VOTAR ENLACE
r.post("/:id/enlaces/:eid/votar", (req, res) => {
  const dir = req.body?.dir === "down" ? "down" : "up";
  const votos = votarEnlace(req.params.id, req.params.eid, dir);
  if (req.headers.accept?.includes("application/json"))
    return res.json({ votos });
  res.redirect(`/temas/${req.params.id}`);
});

// BORRAR ENLACE
r.post("/:id/enlaces/:eid/borrar", (req, res) => {
  borrarEnlace(req.params.id, req.params.eid);
  res.redirect(`/temas/${req.params.id}`);
});

module.exports = r;
