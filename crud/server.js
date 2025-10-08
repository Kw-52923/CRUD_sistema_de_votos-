
// server.js
// Servidor principal Exp ress

const express = require("express"); // Importa express, el framework que crea el servidor web
const path = require("path"); // MA
require("../db"); // Inicializa base de datos
const temasRouter = require("./rutas/temas");

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Motor de vistas
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Rutas principales
app.use("/temas", temasRouter);

// Redirige la raíz a /temas
app.get("/", (req, res) => res.redirect("/temas"));

// Servidor
app.listen(3000, "127.0.0.1", () =>
  console.log("Servidor corriendo en http://localhost:3000")
);

