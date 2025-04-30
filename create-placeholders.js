const fs = require('fs');
const path = require('path');

/**
 * Este script crea todas las imágenes de placeholder necesarias para el proyecto
 * en formato SVG con un tamaño y color específicos.
 * 
 * Ejecuta este script con: node create-placeholders.js
 */

// Función para crear un SVG básico con texto
function createSvg(width, height, text, color) {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${color}" />
  <text x="50%" y="50%" font-family="Arial" font-size="20" fill="white" text-anchor="middle" dominant-baseline="middle">
    ${text}
  </text>
</svg>`;
}

// Definiciones de las imágenes
const images = [
  {
    path: 'public/hero-bg.jpg',
    width: 1920,
    height: 1080,
    text: 'La Penka Del Haragan - Hero Background',
    color: '#1A1A1A'
  },
  // Bebidas
  {
    path: 'public/drinks/beer1.jpg',
    width: 600,
    height: 600,
    text: 'Penka Lager',
    color: '#8B4513'
  },
  {
    path: 'public/drinks/beer2.jpg',
    width: 600,
    height: 600,
    text: 'El Harapo Stout',
    color: '#2E1A12'
  },
  {
    path: 'public/drinks/mezcal.jpg',
    width: 600,
    height: 600,
    text: 'Mezcal Campesino',
    color: '#C8A064'
  },
  {
    path: 'public/drinks/cocktail1.jpg',
    width: 600,
    height: 600,
    text: 'Coctel Peña Colorada',
    color: '#FF6347'
  },
  {
    path: 'public/drinks/michelada.jpg',
    width: 600,
    height: 600,
    text: 'Michelada del Haragan',
    color: '#B22222'
  },
  {
    path: 'public/drinks/coffee.jpg',
    width: 600,
    height: 600,
    text: 'Café de Olla',
    color: '#4B3621'
  },
  // Eventos
  {
    path: 'public/events/rock-rural.jpg',
    width: 800,
    height: 450,
    text: 'Noche de Rock Rural',
    color: '#8A2BE2'
  },
  {
    path: 'public/events/beer-fest.jpg',
    width: 800,
    height: 450,
    text: 'Festival de la Cerveza Artesanal',
    color: '#DAA520'
  },
  {
    path: 'public/events/open-mic.jpg',
    width: 800,
    height: 450,
    text: 'Noche de Micrófono Abierto',
    color: '#20B2AA'
  },
  // Galería
  {
    path: 'public/gallery/gallery1.jpg',
    width: 800,
    height: 600,
    text: 'Galería 1',
    color: '#FF43A4' // Rosa neón (primario)
  },
  {
    path: 'public/gallery/gallery2.jpg',
    width: 400,
    height: 400,
    text: 'Galería 2',
    color: '#39FF14' // Verde neón (secundario)
  },
  {
    path: 'public/gallery/gallery3.jpg',
    width: 400,
    height: 400,
    text: 'Galería 3',
    color: '#FF43A4'
  },
  {
    path: 'public/gallery/gallery4.jpg',
    width: 800,
    height: 400,
    text: 'Galería 4',
    color: '#39FF14'
  },
  {
    path: 'public/gallery/gallery5.jpg',
    width: 800,
    height: 400,
    text: 'Galería 5',
    color: '#FF43A4'
  },
  {
    path: 'public/gallery/gallery6.jpg',
    width: 400,
    height: 400,
    text: 'Galería 6',
    color: '#39FF14'
  },
  {
    path: 'public/gallery/gallery7.jpg',
    width: 400,
    height: 400,
    text: 'Galería 7',
    color: '#FF43A4'
  },
  {
    path: 'public/gallery/gallery8.jpg',
    width: 400,
    height: 400,
    text: 'Galería 8',
    color: '#39FF14'
  },
  {
    path: 'public/gallery/gallery9.jpg',
    width: 800,
    height: 600,
    text: 'Galería 9',
    color: '#FF43A4'
  }
];

// Crear las imágenes
console.log('Creando imágenes de placeholder...');

images.forEach(img => {
  // Asegurarse de que el directorio exista
  const dir = path.dirname(img.path);
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Creado directorio: ${dir}`);
  }

  // Crear y guardar el SVG como archivo .svg
  const svgPath = img.path.replace('.jpg', '.svg');
  const svgContent = createSvg(img.width, img.height, img.text, img.color);
  fs.writeFileSync(svgPath, svgContent);
  console.log(`Creada imagen: ${svgPath}`);
});

console.log(`¡Completado! Se han creado ${images.length} imágenes de placeholder.`);
console.log('Nota: Los archivos se han guardado como .svg. Si necesitas .jpg, puedes convertirlos manualmente.');
console.log('Para usar en desarrollo, puedes renombrar los archivos o actualizar las rutas en el código.');
