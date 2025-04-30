# La Penka Del Haragan

Sitio web one-page para "La Penka Del Haragan", un bar rural con estilo pintoresco y colorido.

## Solución a errores encontrados

Si tienes problemas con el error `Module not found: Can't resolve '@mui/material-nextjs/v14-appRouter'`, se ha corregido la implementación:

1. Se ha reemplazado la dependencia problemática con una implementación manual del caché de emotion.
2. Se han actualizado todas las importaciones de iconos de lucide-react para evitar componentes indefinidos.
3. Se han creado placeholders para las imágenes necesarias.

Consulta el archivo `SOLUCION_PROBLEMAS.md` para más detalles.

## Características

- Diseño responsive adaptado a todos los dispositivos
- Modo oscuro con paleta de colores neón (rosa y verde)
- Animaciones fluidas con Framer Motion
- Carrusel de productos con Swiper
- Formulario de contacto y reserva
- Galería de imágenes interactiva

## Tecnologías utilizadas

- Next.js 14 (App Router)
- TypeScript
- Material-UI v5
- Framer Motion
- Swiper
- Lucide React (íconos)

## Estructura del proyecto

- `/src/app`: Estructura principal del App Router
- `/src/components`: Componentes organizados por sección
  - `/Hero`: Sección principal con imagen/video de fondo
  - `/Menu`: Carrusel de bebidas destacadas
  - `/Events`: Tarjetas animadas con próximos eventos
  - `/Gallery`: Grid responsive de imágenes
  - `/Contact`: Formulario de reserva
  - `/Footer`: Enlaces y datos de contacto
- `/src/theme`: Configuración del tema de MUI
- `/public`: Imágenes y assets estáticos

## Iniciar el proyecto

1. Instalar dependencias:

```bash
npm install
# o
yarn install
```

2. Crear imágenes de placeholder (opcional):

```bash
node create-placeholders.js
```

3. Iniciar servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
```

4. Abrir [http://localhost:3000](http://localhost:3000) en tu navegador.

## Imágenes

Para el funcionamiento correcto del sitio, se necesitan varias imágenes. Se han creado placeholders:

- `/public/hero-bg.jpg` - Imagen de fondo para el hero
- `/public/drinks/` - Imágenes para las bebidas del menú
- `/public/events/` - Imágenes para los eventos
- `/public/gallery/` - Imágenes para la galería

Consulta `/public/README_IMAGENES.md` para más detalles sobre las imágenes requeridas.

## Construir para producción

```bash
npm run build
# o
yarn build
```

## Personalización

El tema está definido en `/src/theme/theme.ts` con una paleta de colores neón ajustable.

## Solución de problemas

Si encuentras problemas durante la instalación o ejecución, consulta el archivo `SOLUCION_PROBLEMAS.md`.
# penka-website
