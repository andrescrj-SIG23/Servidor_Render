// server.js
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// HABILITA CORS PARA TODOS LOS ORÍGENES (localhost y GitHub Pages)
app.use(cors({
  origin: true, // Permite cualquier origen (ideal para desarrollo)
  // origin: ['http://127.0.0.1:5500', 'https://andresci-SIG23.github.io'] // Más seguro en producción
}));

// Sirve archivos estáticos desde la carpeta /public
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de prueba
app.get('/', (req, res) => {
  res.send(`
    <h1>Servidor GeoJSON activo</h1>
    <p>Accede a: <a href="/Departamentos.geojson">Departamentos.geojson</a></p>
  `);
});

// Puerto dinámico para Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  console.log(`GeoJSON disponible en: /Departamentos.geojson`);
});