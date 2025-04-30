# Solución de Problemas Comunes

Este documento te ayudará a resolver los problemas más comunes que podrías encontrar al trabajar con este proyecto.

## Problemas con dependencias

### Error: Module not found: Can't resolve '@mui/material-nextjs/v14-appRouter'

Este error ocurre porque originalmente se intentó usar una dependencia que no existe. Se ha corregido en el código, pero si sigues viendo este error:

1. Asegúrate de usar la última versión del código (que ya contiene la solución)
2. Instala las dependencias correctas:
   ```bash
   npm install
   ```
3. Limpia la caché de Next.js:
   ```bash
   rm -rf .next
   ```

### Error al importar iconos de Lucide React

Si encuentras errores relacionados con los iconos, verifica que estés importando correctamente los iconos con su nombre y sufijo "Icon":

```typescript
// INCORRECTO
import { Menu, X, Music } from 'lucide-react';

// CORRECTO
import { Menu as MenuIcon, X as CloseIcon, Music as MusicIcon } from 'lucide-react';
```

## Problemas con las imágenes

### Error: Cannot find module '/public/...'

Los placeholders de imágenes que hemos creado son simples archivos de texto. Para un funcionamiento correcto:

1. Reemplaza cada placeholder con una imagen real (JPG, PNG, WebP)
2. Sigue las instrucciones en `/public/README_IMAGENES.md`

### Imágenes que no cargan

1. Verifica que las rutas sean correctas
2. Asegúrate de que los archivos tengan extensión de imagen (.jpg, .png, .webp)
3. Asegúrate de que las imágenes estén en las carpetas correctas

## Problemas con Framer Motion

Si encuentras errores con Framer Motion:

1. Verifica la versión de Framer Motion en package.json
2. Si es necesario, actualiza la dependencia:
   ```bash
   npm install framer-motion@latest
   ```

## Problemas con Swiper

Si el carrusel de Swiper no funciona correctamente:

1. Asegúrate de incluir los estilos en la parte superior del componente:
   ```typescript
   import 'swiper/css';
   import 'swiper/css/effect-cards';
   import 'swiper/css/pagination';
   ```
2. Verifica que estés importando los módulos correctos:
   ```typescript
   import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
   ```

## Problemas con el tema de MUI

Si los colores o estilos no se aplican correctamente:

1. Verifica que el ThemeProvider esté configurado correctamente en providers.tsx
2. Usa el operador opcional para acceder a las propiedades del tema:
   ```typescript
   color: theme.palette.neonPink?.main || '#FF43A4'
   ```

## Problemas con Next.js

### Page Not Found o Error 404

1. Verifica que estés utilizando el App Router correctamente
2. Asegúrate de que la estructura de carpetas en src/app sea correcta
3. Ejecuta el servidor en modo de desarrollo para ver mensajes de error detallados:
   ```bash
   npm run dev
   ```

### La página no se actualiza con cambios

1. A veces Next.js no detecta todos los cambios. Detén el servidor y reinícialo:
   ```bash
   npm run dev
   ```
2. Limpia la caché:
   ```bash
   rm -rf .next
   ```

Si encuentras otros problemas no listados aquí, consulta la documentación oficial de las bibliotecas utilizadas:
- [Next.js](https://nextjs.org/docs)
- [Material UI](https://mui.com/material-ui/getting-started/overview/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [Swiper](https://swiperjs.com/get-started)
