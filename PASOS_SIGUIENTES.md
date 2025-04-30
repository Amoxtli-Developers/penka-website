# Pasos Siguientes

Este documento contiene instrucciones sobre qué hacer a continuación para completar la configuración de tu proyecto "La Penka Del Haragan".

## 1. Instalar dependencias

Lo primero que debes hacer es instalar todas las dependencias del proyecto:

```bash
cd /Users/salomon/Documents/Projects/LaPenkaDelHaragan
npm install
```

Esto puede tardar unos minutos mientras descarga todas las bibliotecas necesarias.

## 2. Preparar las imágenes

Actualmente hay archivos de placeholder para todas las imágenes necesarias. Tienes dos opciones:

### Opción A: Usar el script para crear placeholders SVG

Ejecuta el script incluido para generar placeholders SVG más visuales:

```bash
node create-placeholders.js
```

Esto creará archivos SVG con colores y dimensiones apropiadas. Para utilizarlos, deberás cambiar las referencias en el código de `.jpg` a `.svg` o renombrar los archivos.

### Opción B: Reemplazar con imágenes reales (recomendado)

Reemplaza los placeholders con imágenes reales siguiendo la estructura:

- `/public/hero-bg.jpg` - Imagen principal de fondo
- `/public/drinks/beer1.jpg` (y todas las demás bebidas)
- `/public/events/rock-rural.jpg` (y demás eventos)
- `/public/gallery/gallery1.jpg` hasta `/public/gallery/gallery9.jpg`

Revisa el archivo `/public/README_IMAGENES.md` para más detalles sobre los requisitos de cada imagen.

## 3. Iniciar el servidor de desarrollo

Una vez instaladas las dependencias y preparadas las imágenes, inicia el servidor:

```bash
npm run dev
```

Ahora puedes acceder a la aplicación en [http://localhost:3000](http://localhost:3000).

## 4. Personalizar el contenido

Personaliza el contenido del sitio modificando los textos y datos en cada componente:

- Información de bebidas: `/src/components/Menu/Menu.tsx`
- Información de eventos: `/src/components/Events/Events.tsx`
- Datos de contacto: `/src/components/Contact/Contact.tsx` y `/src/components/Footer/Footer.tsx`

## 5. Ajustar el tema y colores

Si deseas modificar la paleta de colores o el aspecto visual:

1. Edita el archivo `/src/theme/theme.ts`
2. Modifica los colores neonPink y neonGreen según tus preferencias

## 6. Resolución de problemas comunes

Si encuentras problemas durante la configuración o desarrollo:

1. Consulta el archivo `SOLUCION_PROBLEMAS.md` para soluciones a errores comunes
2. Verifica que todas las dependencias estén correctamente instaladas
3. Asegúrate de que las imágenes existan en las rutas correctas

## 7. Construir para producción

Cuando estés listo para desplegar tu sitio:

```bash
npm run build
```

Esto generará una versión optimizada en la carpeta `.next` que podrás subir a tu servidor o servicio de hosting.

## 8. Despliegue

Para desplegar tu sitio, puedes usar servicios como:

- [Vercel](https://vercel.com) (recomendado para proyectos Next.js)
- [Netlify](https://netlify.com)
- Tu propio servidor

## Recursos adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Material UI](https://mui.com/material-ui/getting-started/overview/)
- [Documentación de Framer Motion](https://www.framer.com/motion/)
- [Documentación de Lucide Icons](https://lucide.dev/guide/packages/lucide-react)
