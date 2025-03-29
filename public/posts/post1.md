# Guía Esencial de HTML y su Semántica

## 1. ¿Qué es HTML?

HTML (HyperText Markup Language) es el lenguaje estándar para crear páginas web. Es un lenguaje de **marcado** que define la **estructura** del contenido web mediante un sistema de **etiquetas**. HTML no es un lenguaje de programación, sino un lenguaje que le dice al navegador cómo mostrar el contenido.

## 2. Etiquetas HTML

Las etiquetas son el componente fundamental de HTML. Son fragmentos de código que definen elementos en la página web.

### Estructura de una etiqueta:

```html
<nombre-etiqueta>Contenido</nombre-etiqueta>
```

- **Etiqueta de apertura**: `<nombre-etiqueta>`
- **Contenido**: Texto u otras etiquetas anidadas
- **Etiqueta de cierre**: `</nombre-etiqueta>`

### Ejemplos de etiquetas básicas:

```html
<h1>Esto es un título</h1>
<p>Esto es un párrafo.</p>
```

### Etiquetas sin cierre (autocierre):

Algunas etiquetas no contienen contenido y se cierran en sí mismas:

```html
<img src="imagen.jpg">
<br>
<hr>
```

En HTML5, es recomendable incluir la barra de cierre:

```html
<img src="imagen.jpg" />
<br />
<hr />
```

## 3. Estructura Básica de un Documento HTML

Todo documento HTML tiene esta estructura básica:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Título de la página</title>
</head>
<body>
  <h1>Mi primera página web</h1>
  <p>Bienvenido a mi sitio.</p>
</body>
</html>
```

### Elementos fundamentales:

#### `<!DOCTYPE html>`
Declaración que define la versión de HTML (en este caso HTML5).

#### `<html>`
Elemento raíz que contiene todo el documento HTML.
- El atributo `lang` especifica el idioma del contenido.

#### `<head>`
Contiene metadatos (información sobre el documento) y enlaces a recursos externos. **No es visible** para los usuarios, pero es esencial para:
- Definir el título de la página (pestaña del navegador)
- Especificar la codificación de caracteres
- Enlazar hojas de estilo (CSS) y scripts (JavaScript)
- Proporcionar información para motores de búsqueda

#### `<body>`
Contiene todo el contenido visible de la página web:
- Texto
- Imágenes
- Enlaces
- Formularios
- Tablas
- Y todos los elementos que ve el usuario

## 4. Semántica en HTML

La semántica en HTML se refiere a utilizar las etiquetas que describen correctamente el significado del contenido, no solo su apariencia.

### ¿Por qué es importante la semántica?

- **Accesibilidad**: Ayuda a las tecnologías de asistencia (lectores de pantalla)
- **SEO**: Mejora el posicionamiento en buscadores
- **Mantenimiento**: Hace que el código sea más legible y fácil de mantener
- **Compatibilidad**: Prepara tu sitio para futuras tecnologías web

### Ejemplos de etiquetas semánticas vs. no semánticas:

No semántico:
```html
<div class="header">
  <div class="navegacion">...</div>
</div>
<div class="contenido-principal">...</div>
<div class="pie-pagina">...</div>
```

Semántico:
```html
<header>
  <nav>...</nav>
</header>
<main>...</main>
<footer>...</footer>
```

## 5. Etiquetas Semánticas Principales

### Estructura de página:

```html
<header>
  <!-- Cabecera del sitio: logo, título principal, navegación -->
</header>

<nav>
  <!-- Menú de navegación principal -->
</nav>

<main>
  <!-- Contenido principal único de la página -->
  
  <article>
    <!-- Contenido independiente y autocontenido (blog, noticia) -->
  </article>
  
  <section>
    <!-- Agrupación temática de contenido -->
  </section>
  
  <aside>
    <!-- Contenido relacionado pero no esencial (publicidad, enlaces) -->
  </aside>
</main>

<footer>
  <!-- Pie de página: información de contacto, copyright, enlaces -->
</footer>
```

### Elementos de texto:

```html
<h1>Título principal (solo uno por página)</h1>
<h2>Subtítulo</h2>
<h3>Título de sección</h3>
<!-- h4, h5, h6 para niveles adicionales -->

<p>Párrafo de texto.</p>

<strong>Texto importante</strong>
<em>Texto enfatizado</em>

<blockquote>Cita de otra fuente</blockquote>

<ul>
  <li>Elemento de lista no ordenada</li>
  <li>Otro elemento</li>
</ul>

<ol>
  <li>Primer elemento ordenado</li>
  <li>Segundo elemento</li>
</ol>
```

## 6. Atributos en HTML

Los atributos proporcionan información adicional sobre las etiquetas y modifican su comportamiento. Se colocan en la etiqueta de apertura.

### Sintaxis de los atributos:

```html
<etiqueta nombre-atributo="valor">Contenido</etiqueta>
```

### Atributos globales (funcionan en casi todas las etiquetas):

```html
<div id="identificador-unico" class="clase1 clase2" style="color: blue;">
  Este elemento tiene varios atributos.
</div>
```

- **id**: Identificador único para el elemento (solo uno por página)
- **class**: Categoriza elementos (útil para CSS)
- **style**: Aplica estilos CSS directamente
- **title**: Muestra información adicional al pasar el cursor

### Atributos específicos por etiqueta:

```html
<!-- Enlaces -->
<a href="https://ejemplo.com" target="_blank">Visitar sitio</a>

<!-- Imágenes -->
<img src="imagen.jpg" alt="Descripción de la imagen" width="300" height="200">

<!-- Formularios -->
<input type="email" placeholder="Ingresa tu email" required>
```

### Atributos booleanos:

Son atributos que no necesitan un valor; su presencia indica "verdadero":

```html
<input type="checkbox" checked>
<button disabled>No disponible</button>
```

## 7. Elementos Básicos e Importantes

### Enlaces:

```html
<a href="pagina.html">Enlace interno</a>
<a href="https://ejemplo.com">Enlace externo</a>
<a href="#seccion">Enlace a sección en la misma página</a>
<a href="mailto:email@ejemplo.com">Enlace para email</a>
```

### Imágenes:

```html
<img src="ruta/imagen.jpg" alt="Descripción accesible de la imagen">
```

### Formularios:

```html
<form action="/procesar" method="POST">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <label for="mensaje">Mensaje:</label>
  <textarea id="mensaje" name="mensaje" rows="4"></textarea>
  
  <button type="submit">Enviar</button>
</form>
```

## 8. Buenas Prácticas en HTML

1. **Indentación y formato**: Mantén un código limpio y bien organizado
2. **Semántica correcta**: Usa las etiquetas según su propósito
3. **Validación**: Verifica que tu HTML cumpla con los estándares
4. **Accesibilidad**: Usa atributos `alt` en imágenes y etiquetas correctas
5. **Etiquetas en minúsculas**: Aunque HTML no es sensible a mayúsculas, es mejor práctica usar minúsculas
6. **Comillas dobles**: Para los valores de los atributos

## 9. Recursos para Aprender Más

- [MDN Web Docs](https://developer.mozilla.org/es/docs/Web/HTML)
- [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
- [HTML5 Doctor](http://html5doctor.com/) (para profundizar en semántica)
- [Can I Use](https://caniuse.com/) (para verificar compatibilidad)

## Conclusión

HTML proporciona la estructura fundamental de cualquier página web. Al comprender las etiquetas, atributos y principios semánticos, podrás crear sitios web más accesibles, mejor posicionados en buscadores y más fáciles de mantener.

Recuerda que HTML trabaja junto con CSS (para estilos) y JavaScript (para interactividad) para crear experiencias web completas. ¡Feliz aprendizaje! 🚀