// 1️⃣ Configurar el servidor Express
// Crea servidor.js con Express y un app.listen.
// Verifica que si entras a http://localhost:3000 veas un texto simple "Servidor funcionando".
// 👉 Ejercicio: haz un app.get("/", ...) que devuelva "Hola mundo desde Express".
const express =  require('express'); 
const app = express();
const PORT = 3000;
app.get('/', (req, res) => res.send('<h1>Hola Express</h1>'));
app.listen(PORT, () => {
console.log('Servidor funcionando en el puerto ' + PORT);
});