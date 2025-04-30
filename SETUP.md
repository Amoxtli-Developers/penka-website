# Instrucciones de configuración - La Penka Del Haragan

## Requisitos previos

Asegúrate de tener instalado:
- Node.js (versión 16.x o superior)
- npm o yarn

## Pasos para configurar el proyecto

1. **Instalar dependencias**

```bash
# Usando npm
npm install

# O usando yarn
yarn install
```

2. **Agregar imágenes**

El proyecto necesita varias imágenes para funcionar correctamente. Revisa el archivo `/public/README.md` para más detalles sobre las imágenes necesarias y dónde colocarlas.

3. **Ejecutar en modo desarrollo**

```bash
# Usando npm
npm run dev

# O usando yarn
yarn dev
```

El sitio estará disponible en [http://localhost:3000](http://localhost:3000)

## Solución a errores comunes

### Error en el módulo @mui/material-nextjs

Si encuentras un error relacionado con `@mui/material-nextjs`, se ha corregido reemplazando ese módulo con una implementación manual del cache de emotion.

### Errores con imágenes

Si ves errores relacionados con imágenes no encontradas, asegúrate de haber agregado todas las imágenes requeridas en la carpeta `/public` siguiendo las instrucciones del archivo README en esa carpeta.

### Problemas con la fuente Poppins

La fuente Poppins se carga a través de next/font/google. Si tienes problemas, asegúrate de tener una conexión a internet activa durante el desarrollo.

## Personalización

- **Tema**: Puedes modificar los colores y estilos en `/src/theme/theme.ts`
- **Textos y contenido**: Actualiza los textos en cada componente según tus necesidades
- **Imágenes**: Reemplaza las imágenes en la carpeta `/public` con tus propias imágenes

## Construcción para producción

```bash
# Usando npm
npm run build
npm start

# O usando yarn
yarn build
yarn start
```
