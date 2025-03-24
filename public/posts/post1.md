# Guía Completa de HTML y su Semántica

HTML (HyperText Markup Language) es el lenguaje de marcado utilizado para la creación de páginas web. Su propósito
principal es estructurar el contenido mediante etiquetas. En esta guía, exploraremos las etiquetas HTML y su semántica
para mejorar la accesibilidad y el SEO.

---

## 1. ¿Qué es HTML y por qué es importante?

HTML es un lenguaje de marcado que define la estructura de una página web mediante etiquetas. Es el esqueleto sobre el
cual se aplican estilos con CSS y funcionalidades con JavaScript.

**¿Por qué es importante la semántica en HTML?**
La semántica en HTML permite que los navegadores, motores de búsqueda y herramientas de accesibilidad interpreten
correctamente el contenido. Por ejemplo, usar `<h1>` para títulos principales y `<p>` para párrafos ayuda a que el
contenido sea más comprensible.

---

## 2. Estructura Básica de un Documento HTML

Todo documento HTML comienza con la siguiente estructura:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Una guía completa sobre HTML y su semántica">
  <title>Mi Primera Página</title>
</head>
<body>
<h1>Hola, Mundo!</h1>
<p>Bienvenido a mi página web.</p>
</body>
</html>
```

**Explicación:**

- `<!DOCTYPE html>`: Define el tipo de documento y la versión de HTML.
- `<html lang="es">`: Indica el inicio del documento y el idioma (español).
- `<head>`: Contiene metadatos y enlaces a recursos externos.
- `<meta charset="UTF-8">`: Define la codificación de caracteres.
- `<meta name="viewport">`: Permite el diseño responsivo.
- `<meta name="description">`: Ayuda al SEO describiendo el contenido de la página.
- `<title>`: Título que aparece en la pestaña del navegador.
- `<body>`: Contiene el contenido visible de la página.

---

## 3. Encabezados en HTML

HTML proporciona seis niveles de encabezados, desde `<h1>` hasta `<h6>`, donde `<h1>` es el más importante.

```html
<h1>Título Principal</h1>
<h2>Subtítulo</h2>
<h3>Encabezado de sección</h3>
<h4>Subsección</h4>
<h5>Detalle menor</h5>
<h6>Nota adicional</h6>
```

**Reglas de uso:**

- Solo debe haber un `<h1>` por página.
- Los encabezados ayudan a estructurar el contenido y mejoran el SEO.
- Se recomienda no saltar niveles (por ejemplo, de `<h1>` a `<h3>` directamente).

---

## 4. Etiquetas Semánticas en HTML

Las etiquetas semánticas describen el significado del contenido, mejorando la accesibilidad y el SEO.

### a) Estructura Principal

```html

<header>
  <h1>Mi Blog</h1>
  <nav>
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Sobre Mí</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </nav>
</header>
```

- `<header>`: Contiene encabezados y menús de navegación.
- `<nav>`: Define la navegación principal del sitio.

### b) Contenido Principal

```html

<main>
  <article>
    <h2>Título del Artículo</h2>
    <p>Este es el contenido principal del artículo.</p>
  </article>
  <section>
    <h3>Sección Importante</h3>
    <p>Información adicional relevante.</p>
  </section>
</main>
```

- `<main>`: Contiene el contenido principal de la página.
- `<article>`: Representa un contenido independiente (blogs, noticias).
- `<section>`: Agrupa contenido relacionado.

### c) Complementos y Pie de Página

```html

<aside>
  <h3>Publicidad</h3>
  <p>Espacio para anuncios o contenido relacionado.</p>
</aside>
<footer>
  <p>&copy; 2025 Mi Blog. Todos los derechos reservados.</p>
</footer>
```

- `<aside>`: Contiene contenido relacionado (publicidad, enlaces adicionales).
- `<footer>`: Contiene información de pie de página (créditos, enlaces legales).

---

## 5. Atributos en HTML

Las etiquetas HTML pueden tener atributos que proporcionan información adicional.

```html
<a href="https://ejemplo.com" target="_blank">Visitar sitio</a>
<img src="imagen.jpg" alt="Descripción de la imagen">
```

- `href`: Especifica la URL en enlaces `<a>`.
- `target="_blank"`: Abre el enlace en una nueva pestaña.
- `src`: Indica la fuente de una imagen.
- `alt`: Texto alternativo para mejorar accesibilidad y SEO.

---

## 6. Etiquetas de Texto

```html
<p>Este es un párrafo.</p>
<strong>Texto en negrita</strong>
<em>Texto en cursiva</em>
<mark>Texto resaltado</mark>
<blockquote>Una cita importante.</blockquote>
```

- `<p>`: Define un párrafo.
- `<strong>`: Negrita con significado importante.
- `<em>`: Texto en cursiva con énfasis.
- `<mark>`: Texto resaltado.
- `<blockquote>`: Cita de otro autor.

---

## 7. Formularios en HTML

```html

<form action="/enviar" method="POST">
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre" required>
  <button type="submit">Enviar</button>
</form>
```

- `<form>`: Define un formulario.
- `<input>`: Campo de entrada.
- `<label>`: Etiqueta para un campo.
- `<button>`: Botón de envío.

--

## Conclusión

HTML es la base de toda página web. Usar etiquetas semánticas mejora la estructura, accesibilidad y SEO. Con una buena
comprensión de HTML, es fácil avanzar en CSS y JavaScript. 🚀
