const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Configura CORS para permitir solicitudes desde tu sitio en GitHub Pages
app.use(cors({
  origin: 'https://andrescrj-sig23.github.io' // Reemplaza con tu URL real de GitHub Pages
}));

// Sirve archivos estáticos desde la carpeta public
app.use(express.static(path.join(__dirname, 'public')));

// Puerto dinámico para Render (o 3000 por defecto localmente)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});