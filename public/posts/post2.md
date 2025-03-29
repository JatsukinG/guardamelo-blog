# Guía Completa de CSS

CSS (Cascading Style Sheets o Hojas de Estilo en Cascada) es el lenguaje que usamos para aplicar estilos a documentos HTML. Con CSS transformamos la apariencia visual de las páginas web, definiendo colores, fuentes, tamaños, márgenes, animaciones y mucho más. En esta guía aprenderás los fundamentos esenciales de CSS con explicaciones detalladas y ejemplos prácticos.

---

## 1. ¿Cómo conectar CSS con HTML?
Existen tres maneras principales de aplicar CSS en un documento HTML, cada una con sus propias ventajas y casos de uso:

### a) CSS en línea (Inline CSS)
Se aplica directamente en los elementos HTML mediante el atributo `style`. Es útil para cambios rápidos o estilos que solo afectan a un elemento específico, pero no se recomienda en proyectos grandes debido a la dificultad de mantenimiento y la mezcla de contenido con presentación.

**Ejemplo:**
```html
<p style="color: blue; font-size: 16px; margin: 5px;">Este es un texto azul con margen de 5px.</p>
```

**¿Cuándo usar CSS en línea?**
- Para cambios rápidos durante el desarrollo o pruebas
- Para estilos muy específicos que solo afectan a un único elemento
- Para sobrescribir temporalmente estilos existentes

### b) CSS interno (Internal CSS)
Se define dentro de una etiqueta `<style>` en la sección `<head>` del documento HTML. Se usa cuando los estilos son específicos de una sola página y no necesitan reutilizarse en otras páginas del sitio.

**Ejemplo:**
```html
<head>
    <style>
        p {
            color: red;
            font-size: 18px;
            line-height: 1.5;
        }
        
        .destacado {
            background-color: yellow;
            padding: 5px;
        }
    </style>
</head>
```

**¿Cuándo usar CSS interno?**
- Para páginas únicas con estilos específicos
- Para prototipos rápidos
- Cuando no quieres crear un archivo CSS separado para una sola página

### c) CSS externo (External CSS)
Se escribe en un archivo separado con extensión `.css` (por ejemplo, `styles.css`) y se enlaza al documento HTML mediante la etiqueta `<link>`. Este método es la mejor práctica para mantener el código limpio, reutilizable y fácil de mantener, especialmente en sitios web con múltiples páginas.

**Ejemplo:**

En el HTML:
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

En el archivo `styles.css`:
```css
p {
    color: green;
    font-size: 20px;
    margin-bottom: 15px;
}

.container {
    width: 80%;
    margin: 0 auto;
}
```

**¿Cuándo usar CSS externo?**
- Para sitios web con múltiples páginas
- Para mantener una apariencia consistente en todo el sitio
- Para separar claramente la estructura (HTML) de la presentación (CSS)
- Para aprovechar el caché del navegador (el archivo CSS se descarga una vez y se reutiliza)

---

## 2. Tipos de selectores en CSS
Los selectores son patrones que determinan a qué elementos HTML se aplicarán los estilos. Dominar los selectores es fundamental para aplicar estilos de manera eficiente y específica.

### a) Selector de tipo (por etiqueta)
Selecciona todos los elementos de un tipo específico (etiqueta HTML). Es el selector más básico.

**Ejemplo:**
```css
h1 {
    color: blue;
    font-size: 32px;
}

p {
    line-height: 1.6;
    margin-bottom: 20px;
}
```

### b) Selector de clase
Selecciona elementos con una clase específica. Las clases son atributos que puedes asignar a cualquier elemento HTML y permiten aplicar el mismo estilo a múltiples elementos, incluso si son de diferentes tipos.

**Ejemplo CSS:**
```css
.destacado {
    font-weight: bold;
    background-color: #f8f9fa;
    border-left: 3px solid #007bff;
    padding: 10px;
}

.error {
    color: red;
    border: 1px solid red;
}
```

**Ejemplo HTML:**
```html
<p class="destacado">Este texto está destacado.</p>
<div class="destacado">Este div también está destacado.</div>
<span class="error">Mensaje de error</span>
```

### c) Selector de ID
Selecciona un único elemento con un ID específico. Los IDs deben ser únicos en cada página, lo que significa que solo deberías tener un elemento con un ID particular.

**Ejemplo CSS:**
```css
#titulo-principal {
    font-size: 36px;
    text-align: center;
    margin-bottom: 30px;
}

#formulario-contacto {
    max-width: 600px;
    margin: 0 auto;
}
```

**Ejemplo HTML:**
```html
<h1 id="titulo-principal">Título Principal</h1>
<form id="formulario-contacto">
    <!-- Contenido del formulario -->
</form>
```

### d) Selector de atributo
Selecciona elementos basados en la presencia o valor de un atributo.

**Ejemplo:**
```css
/* Selecciona todos los enlaces que abren en una nueva pestaña */
a[target="_blank"] {
    color: #0066cc;
    text-decoration: underline;
}

/* Selecciona inputs de tipo texto */
input[type="text"] {
    padding: 8px;
    border: 1px solid #ccc;
}
```

### e) Selectores combinados
Puedes combinar selectores para mayor especificidad.

**Ejemplo:**
```css
/* Selecciona párrafos dentro de div con clase 'contenido' */
div.contenido p {
    text-indent: 20px;
}

/* Selecciona elementos li que son hijos directos de ul con clase 'menu' */
ul.menu > li {
    display: inline-block;
    margin: 0 10px;
}
```

### f) Pseudo-clases y pseudo-elementos
Las pseudo-clases seleccionan elementos en estados específicos (como hover), mientras que los pseudo-elementos seleccionan partes específicas de un elemento.

**Ejemplo de pseudo-clases:**
```css
/* Estilo cuando el mouse está sobre un enlace */
a:hover {
    color: red;
    text-decoration: none;
}

/* Estilo para el primer hijo de tipo p */
p:first-child {
    font-weight: bold;
}
```

**Ejemplo de pseudo-elementos:**
```css
/* Estilo para la primera letra de cada párrafo */
p::first-letter {
    font-size: 150%;
    font-weight: bold;
}

/* Añadir contenido antes de cada enlace */
a::before {
    content: "➜ ";
    color: blue;
}
```

---

## 3. Modelo de Caja en CSS
El modelo de caja es un concepto fundamental en CSS que describe cómo se representa cada elemento HTML como una caja rectangular. Entender este concepto es crucial para controlar el diseño y el espaciado de los elementos.

Todo elemento HTML es una caja con las siguientes propiedades:

- **Content (Contenido):** El contenido real del elemento, donde aparece el texto, imágenes, etc.
- **Padding (Relleno):** Espacio interno entre el contenido y el borde. Aclara y separa el contenido del borde.
- **Border (Borde):** La línea que rodea el elemento. Puede tener diferentes estilos, grosores y colores.
- **Margin (Margen):** Espacio externo entre el borde del elemento y otros elementos adyacentes. Crea separación entre elementos.

### Propiedades del modelo de caja

#### a) Configuración de `margin` (margen externo)
El margen crea espacio alrededor del elemento, separándolo de otros elementos.

**Sintaxis:**
```css
/* Un solo valor (aplica a los cuatro lados) */
.caja {
    margin: 10px;  /* 10px en todos los lados */
}

/* Valores para arriba/abajo y izquierda/derecha */
.caja {
    margin: 10px 20px; /* 10px arriba/abajo, 20px izquierda/derecha */
}

/* Valores individuales (arriba, derecha, abajo, izquierda) - en sentido horario */
.caja {
    margin: 10px 15px 20px 25px; /* Arriba, Derecha, Abajo, Izquierda */
}

/* También puedes definir cada lado individualmente */
.caja {
    margin-top: 10px;
    margin-right: 15px;
    margin-bottom: 20px;
    margin-left: 25px;
}
```

#### b) Configuración de `padding` (relleno interno)
El padding crea espacio dentro del elemento, entre su contenido y su borde.

**Sintaxis:**
```css
/* Un solo valor (aplica a los cuatro lados) */
.caja {
    padding: 15px; /* 15px en todos los lados */
}

/* Valores para arriba/abajo y izquierda/derecha */
.caja {
    padding: 5px 15px; /* 5px arriba/abajo, 15px izquierda/derecha */
}

/* Valores individuales (arriba, derecha, abajo, izquierda) - en sentido horario */
.caja {
    padding: 5px 10px 15px 20px; /* Arriba, Derecha, Abajo, Izquierda */
}

/* También puedes definir cada lado individualmente */
.caja {
    padding-top: 5px;
    padding-right: 10px;
    padding-bottom: 15px;
    padding-left: 20px;
}
```

#### c) Configuración de `border` (borde)
El borde rodea el padding y el contenido, y puede tener diferentes estilos.

**Sintaxis:**
```css
/* Sintaxis abreviada: ancho estilo color */
.caja {
    border: 1px solid black;
}

/* Cada lado por separado */
.caja {
    border-top: 2px dashed red;
    border-right: 1px dotted blue;
    border-bottom: 3px double green;
    border-left: 4px groove orange;
}

/* Propiedades individuales */
.caja {
    border-width: 2px;         /* Ancho del borde */
    border-style: solid;       /* Estilo del borde (solid, dashed, dotted, etc.) */
    border-color: #333;        /* Color del borde */
    border-radius: 10px;       /* Bordes redondeados */
}
```

### Box-sizing
Por defecto, el ancho y alto que defines con `width` y `height` solo afecta al contenido, no incluye padding y border. Esto puede complicar los cálculos de diseño. La propiedad `box-sizing` permite cambiar este comportamiento.

```css
/* El valor por defecto */
.caja-content {
    box-sizing: content-box;
    width: 300px;  /* Solo el contenido tendrá 300px */
    padding: 20px;
    border: 5px solid black;
    /* Ancho total: 300px + 40px (padding) + 10px (border) = 350px */
}

/* Incluye padding y border en las dimensiones totales */
.caja-border {
    box-sizing: border-box;
    width: 300px;  /* El ancho total será 300px, incluyendo padding y border */
    padding: 20px;
    border: 5px solid black;
    /* Ancho del contenido: 300px - 40px (padding) - 10px (border) = 250px */
}
```

Es común establecer `box-sizing: border-box` para todos los elementos del sitio, lo que facilita el diseño:

```css
* {
    box-sizing: border-box;
}
```

---

## 4. Posicionamiento en CSS
El posicionamiento determina cómo se colocan los elementos en la página y cómo interactúan entre sí. Entender los diferentes tipos de posicionamiento es crucial para crear layouts precisos.

### a) `position: static` (posicionamiento estático - por defecto)
Los elementos se colocan según el flujo normal del documento. Las propiedades `top`, `right`, `bottom` y `left` no tienen efecto en este modo.

```css
div {
    position: static; /* Este es el valor por defecto, normalmente no necesitas especificarlo */
}
```

### b) `position: relative` (posicionamiento relativo)
El elemento se posiciona según el flujo normal y luego se desplaza en relación con su posición original. El espacio original del elemento se mantiene.

```css
div {
    position: relative;
    top: 10px;     /* Desplaza 10px hacia abajo desde su posición original */
    left: 20px;    /* Desplaza 20px hacia la derecha desde su posición original */
}
```

**Uso común:** Para pequeños ajustes de posición o como contenedor de referencia para elementos con posición absolute.

### c) `position: absolute` (posicionamiento absoluto)
El elemento se retira del flujo normal del documento y se posiciona en relación con su ancestro posicionado más cercano (un elemento padre que tenga `position: relative`, `absolute`, `fixed` o `sticky`). Si no hay ancestro posicionado, se referencia al elemento `<html>`.

```css
.contenedor {
    position: relative; /* Hace que este elemento sea la referencia de posicionamiento */
    width: 500px;
    height: 300px;
}

.elemento {
    position: absolute;
    top: 50px;     /* 50px desde la parte superior del contenedor */
    left: 100px;   /* 100px desde el lado izquierdo del contenedor */
}
```

**Uso común:** Para posicionar elementos con precisión, elementos superpuestos, tooltips, o elementos que deben aparecer en un lugar específico independientemente del contenido circundante.

### d) `position: fixed` (posicionamiento fijo)
El elemento se retira del flujo normal y se posiciona en relación con la ventana del navegador. Permanece fijo en esa posición incluso cuando se desplaza la página.

```css
div {
    position: fixed;
    bottom: 10px;   /* 10px desde la parte inferior de la ventana */
    right: 10px;    /* 10px desde el lado derecho de la ventana */
    background: #333;
    color: white;
    padding: 10px;
}
```

**Uso común:** Menús de navegación que permanecen visibles al hacer scroll, botones "volver arriba", banners o notificaciones persistentes.

### e) `position: sticky` (posicionamiento adhesivo)
Una combinación de `relative` y `fixed`. El elemento se comporta como `relative` hasta que cruza un punto especificado durante el scroll, luego se comporta como `fixed`.

```css
header {
    position: sticky;
    top: 0;          /* Se fijará en la parte superior cuando llegue a 0px del viewport */
    background: white;
    z-index: 100;    /* Asegura que esté por encima de otros elementos */
}
```

**Uso común:** Encabezados de sección que se mantienen visibles mientras se desplaza por el contenido, barras de navegación que se fijan después de cierto punto de desplazamiento.

### f) Propiedad `z-index`
Controla el orden de apilamiento de elementos posicionados que se superponen. Los valores más altos aparecen por encima de los valores más bajos.

```css
.capa1 {
    position: absolute;
    z-index: 1;     /* Aparecerá debajo de .capa2 */
}

.capa2 {
    position: absolute;
    z-index: 2;     /* Aparecerá encima de .capa1 */
}
```

**Nota importante:** `z-index` solo funciona en elementos que tienen una propiedad `position` diferente a `static`.

---

## 5. Estilos de Texto
CSS ofrece numerosas propiedades para controlar la apariencia del texto, permitiéndote personalizar cada aspecto de la tipografía en tu sitio web.

### a) Tipografía básica

```css
.texto {
    font-family: Arial, Helvetica, sans-serif; /* Lista de fuentes con alternativas */
    font-size: 18px;                /* Tamaño de la fuente */
    font-weight: bold;              /* Grosor de la fuente: normal, bold, 100-900 */
    font-style: italic;             /* Estilo: normal, italic, oblique */
    line-height: 1.5;               /* Altura de línea (ideal: 1.4-1.6) */
}
```

### b) Alineación y transformación del texto

```css
.texto {
    text-align: center;             /* Alineación: left, right, center, justify */
    text-transform: uppercase;      /* Transformación: uppercase, lowercase, capitalize */
    text-decoration: underline;     /* Decoración: none, underline, line-through, overline */
}
```

### c) Espaciado de texto

```css
.texto {
    letter-spacing: 2px;            /* Espaciado entre letras */
    word-spacing: 5px;              /* Espaciado entre palabras */
    text-indent: 20px;              /* Sangría de la primera línea */
}
```

### d) Color y sombra

```css
.texto {
    color: #333;                    /* Color del texto (nombre, hex, rgb, rgba) */
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3); /* Sombra: offsetX offsetY blur color */
}
```

### e) Truncamiento y manejo de texto

```css
.texto-truncado {
    white-space: nowrap;            /* Evita saltos de línea */
    overflow: hidden;               /* Oculta el contenido que se desborda */
    text-overflow: ellipsis;        /* Muestra "..." cuando el texto se corta */
}

.texto-wrap {
    word-wrap: break-word;          /* Permite romper palabras largas */
    overflow-wrap: break-word;      /* Versión moderna de word-wrap */
}
```

### f) Fuentes personalizadas (@font-face)

```css
/* Definir una fuente personalizada */
@font-face {
    font-family: 'MiFuentePersonalizada';
    src: url('ruta/a/mi-fuente.woff2') format('woff2'),
         url('ruta/a/mi-fuente.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

/* Usar la fuente personalizada */
.titulo {
    font-family: 'MiFuentePersonalizada', sans-serif;
}
```

---

## 6. Ancho y Alto
CSS permite controlar las dimensiones de los elementos mediante diversas propiedades. Estas propiedades son fundamentales para crear layouts responsivos y consistentes.

### a) Dimensiones básicas

```css
div {
    width: 300px;                 /* Ancho fijo en píxeles */
    height: 150px;                /* Alto fijo en píxeles */
}
```

### b) Dimensiones con porcentajes
Los porcentajes son relativos al contenedor padre, lo que los hace útiles para diseños responsivos.

```css
.contenedor {
    width: 80%;                   /* 80% del ancho del elemento padre */
    height: 50%;                  /* 50% del alto del elemento padre */
}
```

### c) Dimensiones mínimas y máximas
Estas propiedades permiten establecer límites de tamaño, lo que es crucial para el diseño responsivo.

```css
div {
    min-width: 200px;             /* Ancho mínimo, no será más estrecho que esto */
    max-width: 800px;             /* Ancho máximo, no será más ancho que esto */
    min-height: 100px;            /* Alto mínimo */
    max-height: 500px;            /* Alto máximo */
}
```

**Caso de uso común:**
```css
.contenido {
    width: 100%;                  /* Ocupa todo el ancho disponible */
    max-width: 1200px;            /* Pero nunca más de 1200px */
    margin: 0 auto;               /* Centrado horizontalmente */
}
```

### d) Dimensiones de viewport
Unidades relativas al tamaño de la ventana del navegador, útiles para diseños a pantalla completa o secciones proporcionales.

```css
.hero {
    width: 100vw;                 /* 100% del ancho del viewport */
    height: 100vh;                /* 100% del alto del viewport */
}

.seccion {
    min-height: 50vh;             /* Al menos 50% del alto del viewport */
}
```

### e) Cálculos con `calc()`
Permite realizar cálculos para determinar valores de dimensiones.

```css
.sidebar {
    width: calc(100% - 200px);    /* Todo el ancho menos 200px */
}

.elemento {
    height: calc(100vh - 80px);   /* Alto del viewport menos 80px (útil para considerar un header fijo) */
}
```

---

## 7. Flexbox
Flexbox es un sistema de diseño unidimensional diseñado para distribuir espacio entre elementos en una interfaz y mejorar las capacidades de alineación.

### a) Contenedor flex (flex container)

```css
.contenedor {
    display: flex;                /* Activa flexbox */
    flex-direction: row;          /* Dirección: row, column, row-reverse, column-reverse */
    flex-wrap: wrap;              /* Control de desbordamiento: nowrap, wrap, wrap-reverse */
    justify-content: space-between; /* Alineación horizontal: flex-start, flex-end, center, space-between, space-around, space-evenly */
    align-items: center;          /* Alineación vertical: flex-start, flex-end, center, stretch, baseline */
    align-content: space-around;  /* Alineación de múltiples líneas: flex-start, flex-end, center, space-between, space-around, stretch */
    gap: 20px;                    /* Espacio entre elementos (shorthand para row-gap y column-gap) */
}
```

### b) Elementos flex (flex items)

```css
.elemento {
    flex-grow: 1;                 /* Factor de crecimiento (0 por defecto) */
    flex-shrink: 0;               /* Factor de reducción (1 por defecto) */
    flex-basis: 200px;            /* Tamaño inicial antes de crecer/reducir */
    flex: 1 0 200px;              /* Shorthand para grow, shrink y basis */
    align-self: flex-end;         /* Sobreescribe align-items para este elemento */
    order: 1;                     /* Controla el orden de los elementos (0 por defecto) */
}
```

---

## 8. Grid
CSS Grid es un sistema de diseño bidimensional que permite crear layouts complejos con filas y columnas.

### a) Contenedor grid (grid container)

```css
.contenedor {
    display: grid;                 /* Activa grid */
    grid-template-columns: 1fr 2fr 1fr; /* Define 3 columnas con proporciones 1:2:1 */
    grid-template-rows: 100px auto 100px; /* Define 3 filas */
    grid-gap: 20px;                /* Espacio entre celdas (shorthand para row-gap y column-gap) */
    grid-template-areas:           /* Define áreas con nombres */
        "header header header"
        "sidebar contenido publicidad"
        "footer footer footer";
    justify-items: center;         /* Alineación horizontal dentro de las celdas */
    align-items: stretch;          /* Alineación vertical dentro de las celdas */
}
```

### b) Elementos grid (grid items)

```css
.header {
    grid-area: header;            /* Asigna el elemento a un área nombrada */
}

.contenido {
    grid-column: 2 / 4;           /* Desde línea 2 hasta línea 4 (abarca 2 columnas) */
    grid-row: 2 / 3;              /* Desde línea 2 hasta línea 3 (1 fila) */
    justify-self: start;          /* Alineación horizontal individual */
    align-self: center;           /* Alineación vertical individual */
}
```

---

## 9. Media Queries y Diseño Responsivo
Las media queries permiten aplicar estilos según características del dispositivo, como tamaño de pantalla, orientación o resolución.

```css
/* Estilos base para todas las pantallas */
.contenedor {
    width: 100%;
    padding: 15px;
}

/* Pantallas pequeñas (móviles) */
@media (max-width: 576px) {
    .contenedor {
        padding: 10px;
    }
}

/* Pantallas medianas (tablets) */
@media (min-width: 577px) and (max-width: 992px) {
    .contenedor {
        max-width: 760px;
        margin: 0 auto;
    }
}

/* Pantallas grandes (escritorio) */
@media (min-width: 993px) {
    .contenedor {
        max-width: 1140px;
        margin: 0 auto;
    }
}

/* Orientación */
@media (orientation: landscape) {
    .menu {
        display: flex;
    }
}

/* Dispositivos de alta resolución */
@media (min-resolution: 192dpi) {
    .imagen-logo {
        background-image: url('logo-2x.png');
    }
}
```

---

## 10. Transiciones y Animaciones
CSS permite crear efectos de transición suave y animaciones más complejas.

### a) Transiciones
Las transiciones permiten cambiar suavemente de un estado a otro.

```css
.boton {
    background-color: blue;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
    transition: all 0.3s ease-in-out; /* propiedad duración función-de-tiempo */
}

.boton:hover {
    background-color: darkblue;
    transform: scale(1.05);
}
```

### b) Animaciones
Las animaciones permiten secuencias más complejas con múltiples estados.

```css
/* Definir una animación */
@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Aplicar la animación */
.elemento {
    animation: fadeIn 1s ease-out forwards; /* nombre duración función-de-tiempo modo de llenado */
}
```