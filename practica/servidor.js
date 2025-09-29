// 1️⃣ Configurar el servidor Express
// Crea servidor.js con Express y un app.listen.
// Verifica que si entras a http://localhost:3000 veas un texto simple "Servidor funcionando".
// 👉 Ejercicio: haz un app.get("/", ...) que devuelva "Hola mundo desde Express".
// servidor.js
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
 require('./temasdb')
// Conectar motor de plantillas EJS
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layout'); // Usa views/layout.ejs como plantilla base

// Ruta principal que renderiza index.ejs
app.get('/', (req, res) => {
  res.render('index', { mensaje: 'Bienvenido a la app' });
});

//  Iniciar servidor
app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});