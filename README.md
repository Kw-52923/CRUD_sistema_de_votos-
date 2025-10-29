# 🧠 Learn It, Love It — Sistema de Temas y Enlaces

Aplicación web desarrollada para gestionar **temas de aprendizaje** y sus **enlaces relacionados**, permitiendo votar (👍 / 👎), editar o eliminar cada uno.  
Todo se actualiza en tiempo real y los temas se ordenan automáticamente según su puntuación.

---

## 🚀 Tecnologías utilizadas

| Tecnología | Descripción |
|-------------|-------------|
| 🟢 **Node.js** | Entorno que permite ejecutar JavaScript en el servidor. |
| ⚙️ **Express.js** | Framework para crear rutas y manejar solicitudes HTTP fácilmente. |
| 🧩 **EJS** | Motor de plantillas para combinar HTML con datos dinámicos. |
| 💾 **Better-SQLite3** | Librería para conectarse a una base de datos SQLite. |
| ⚡ **JavaScript** | Manejo de interacciones en tiempo real sin recargar la página. |

---

## ⚙️ Funcionalidades principales

✅ Crear, listar, editar y eliminar **temas**.  
✅ Agregar y borrar **enlaces** asociados a cada tema.  
✅ Votar positiva o negativamente (👍 / 👎) temas y enlaces.  
✅ Actualización dinámica de votos sin recargar la página.  
✅ Organización automática por cantidad de votos.  
✅ Arquitectura **MVC**: Modelo, Vista, Controlador.

---

## 🧩 Estructura del proyecto
├── server.js # Configura el servidor Express y define rutas principales

├── db.js # Inicializa la base de datos SQLite y sus tablas

├── modelo/

│ └── temaModel.js # Lógica de interacción con la base de datos

├── rutas/

│ └── temas.js # Controladores y rutas de temas y enlaces

└── views/

├── layout.ejs # Plantilla base (estructura general)

└── temas/

├── index.ejs # Muestra la lista de temas

└── show.ejs # Muestra los enlaces de un tema y opciones de edición


---

## 🔄 Flujo de funcionamiento

1. El usuario interactúa desde la interfaz (crea tema, vota, etc.).  
2. **Express** recibe la solicitud en `server.js` y la envía al router `/temas`.  
3. En `temas.js`, las rutas llaman a funciones del modelo (`temaModel.js`).  
4. El modelo ejecuta consultas en la base de datos SQLite.  
5. Los datos se devuelven a las vistas **EJS**, que renderizan el contenido dinámicamente.  
6. Gracias al **Fetch API**, los votos se actualizan sin recargar la página.

---

## 💻 Instalación y ejecución

### 🔧 Requisitos previos
Tener instalado **Node.js** y **npm**.

### 📥 Pasos
```bash
# Clonar el repositorio
git clone https://github.com/Kw-52923/CRUD_sistema_de_votos
cd CRUD_sistema_de_votos-

# Instalar dependencias
npm install express ejs better-sqlite3

# Ejecutar el servidor
node server.js

Luego abrí tu navegador en 👉
http://localhost:3000

