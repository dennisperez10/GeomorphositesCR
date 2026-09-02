# Geomorfositios de Costa Rica

Sitio web estático que cataloga geomorfositios de Costa Rica organizados por tipo de proceso geomorfológico: **volcánico, tectónico, fluvial, kárstico, glaciar y marino**. Cada sitio incluye una ficha con descripción, fotografías y un mapa de ubicación interactivo (Leaflet + OpenStreetMap).

## Estructura

```
index.html        Estructura de la página (encabezado, banner, galerías, modal, pie)
css/styles.css     Sistema de diseño (colores, tipografía, componentes)
js/data.js         Datos de cada geomorfositio (nombre, región, coordenadas, descripción, fotos)
js/main.js         Render de tarjetas, lógica del modal y del mapa Leaflet
```

## Cómo ver el sitio localmente

Al ser un sitio 100% estático, basta con abrir `index.html` en el navegador, o servirlo con cualquier servidor estático, por ejemplo:

```
npx serve .
```

## Agregar un nuevo geomorfositio

Editar `js/data.js` y agregar un objeto al arreglo `SITES` con esta forma:

```js
{
  id: "identificador-unico",
  category: "volcanico | tectonico | fluvial | karstico | glaciar | marino",
  name: "Nombre del sitio",
  region: "Provincia / cantón",
  lat: 0.0,
  lng: 0.0,
  elevation_m: 0,        // o null si no aplica
  summary: "Descripción...",
  images: [{ url: "https://...", credit: "Autor - Licencia" }]
}
```

## Créditos

- Mapas: © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors, vía [Leaflet](https://leafletjs.com/).
- Fotografías: [Wikimedia Commons](https://commons.wikimedia.org/), crédito individual indicado en cada ficha.
- Autoría del sitio: Dennis Pérez Ureña — Comisión Nacional de Prevención de Riesgos y Atención de Emergencias (CNE).
