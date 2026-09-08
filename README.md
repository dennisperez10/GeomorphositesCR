# Geomorfositios de Costa Rica

Sitio web estático que cataloga geomorfositios de parques nacionales de Costa Rica, agrupados por proceso geomorfológico principal: **volcánico, tectónico, fluvial, kárstico y glaciar/periglacial** (más un grupo "sin clasificar" para registros de la fuente sin proceso asignado). Cada sitio incluye una ficha con sus datos del inventario y un mapa de ubicación interactivo (Leaflet + OpenStreetMap).

## Estructura

```text
index.html        Estructura de la página (encabezado, banner, buscador, galerías, modal, pie)
css/styles.css     Sistema de diseño (colores, tipografía, componentes)
js/data.js         Datos de cada geomorfositio (generados a partir del inventario CSV)
js/main.js         Render de tarjetas, buscador, lógica del modal y del mapa Leaflet
```

## Fuente de datos

Los 65 sitios provienen del inventario [`Geomorfositios.csv`](https://github.com/dennisperez10/Tarea2/blob/main/Geomorfositios.csv), con columnas: `ID`, `Codigo`, `Nombre`, `AreaProtegida`, `Provincia`, `Canton`, `Distrito`, `Altitud`, `ProcesoGeomorfólogicoPrincipal`, `Caracteristica`, `Clasificacion`, `ValoresCientificos`, `ValoresAnadidos`, `Latitud`, `Longitud`.

El CSV no incluye fotografías ni una descripción narrativa por sitio, así que `js/data.js` conserva todos los campos originales del inventario y genera un `summary` factual a partir de ellos (ubicación, altitud y clasificación de valor geomorfológico). Las tarjetas muestran un marcador de color por categoría en vez de una fotografía; la ficha del modal muestra los datos del inventario (área protegida, ubicación administrativa, proceso, carácter, clasificación y valores científico/añadido) junto con el mapa.

## Cómo ver el sitio localmente

Al ser un sitio 100% estático, basta con abrir `index.html` en el navegador, o servirlo con cualquier servidor estático, por ejemplo:

```bash
npx serve .
```

## Agregar o actualizar sitios

`js/data.js` se genera a partir del CSV de origen. Para actualizar el catálogo:

1. Editar `Geomorfositios.csv` en el repositorio de origen (o el archivo local usado como referencia).
2. Regenerar `SITES` en `js/data.js` manteniendo esta forma por objeto:

```js
{
  id: "codigo-unico",
  category: "volcanico | tectonico | fluvial | karstico | glaciar | sin-clasificar",
  name: "Nombre del sitio",
  region: "Distrito, Cantón, Provincia",
  lat: 0.0,
  lng: 0.0,
  elevation_m: 0,       // o null si no aplica
  areaProtegida: "...", // o null
  provincia: "...", canton: "...", distrito: "...",
  proceso: "...",       // texto original del inventario, o null
  caracteristica: "Natural | Antrópica",
  clasificacion: "Alta | Media | Baja",
  valorCientifico: 0.0, // o null
  valorAnadido: 0.0,    // o null
  summary: "Descripción generada a partir de los campos anteriores."
}
```

Si se agregan fotografías propias en el futuro, se puede reincorporar un campo `images: [{ url, credit }]` y restaurar la galería del modal.

## Créditos

- Datos: inventario [Geomorfositios.csv](https://github.com/dennisperez10/Tarea2/blob/main/Geomorfositios.csv).
- Mapas: © [OpenStreetMap](https://www.openstreetmap.org/copyright) contributors, vía [Leaflet](https://leafletjs.com/).
- Autoría del sitio: Dennis Pérez Ureña — Comisión Nacional de Prevención de Riesgos y Atención de Emergencias (CNE).
