/* 
CONFIGURACION Y LANZAMIENTO DEL SERVIDOR EXPRESS
*/

const express = require('express'); // express marco que permite crear el servidor y manejar rutas
const path = require('path'); // path -> ayuda a construir rutas de archivos sin errores
const topicsController = require('./controlador/topicsController'); // -> archivo que contiene la logica de cada acción

const app = express();
const PORT = process.env.PORT || 3000; // define el puerto donde se ejecutara la app si no hay uno definido usa 3000

// Configuración de EJS
app.set('view engine', 'ejs'); // utilizacion de EJS para renderizar vistas
app.set('views', path.join(__dirname, 'vista')); // indica donde estan los archivos .ejs

// Funciones que procesan datos antes de llegar a las rutas
app.use(express.static(path.join(__dirname, 'public'))); // sirve archivos estaticos como CSS y JS del frontend
app.use(express.urlencoded({ extended: true })); // permite recibir datos de formularios HTML.
app.use(express.json()); // Permite recibir datos en formato JSON

// Rutas
app.get('/', topicsController.getAllTopics); // muestra todos los temas en la pagina principal
app.get('/topic/:id', topicsController.getTopic); // muestra un tema en especifico con sus enlaces
app.post('/topic', topicsController.addTopic);  // agrega un nuevo tema
app.post('/topic/:id/link', topicsController.addLink); // agrega un enlace a un tema especifico 
app.put('/topic/:id', topicsController.updateTopic); // -----------------|
app.put('/topic/:topicId/link/:linkId', topicsController.updateLink);// | actualizan temas o un enlace
app.delete('/topic/:id', topicsController.deleteTopic); // ----------------|
app.delete('/topic/:topicId/link/:linkId', topicsController.deleteLink);// | elimina un tema o un enlace
app.post('/topic/:id/vote', topicsController.voteTopic); // -----------------|
app.post('/topic/:topicId/link/:linkId/vote', topicsController.voteLink);//  | vota por un tema o enlace

// Iniciar servidor
app.listen(PORT, () => { // () => se ejecuta cuando el servidor esta corriendo
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});