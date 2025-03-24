# Guía Completa de CSS

CSS (Cascading Style Sheets) es el lenguaje que usamos para aplicar estilos a documentos HTML. Con CSS podemos definir colores, fuentes, tamaños, márgenes, y mucho más. En esta guía aprenderás los fundamentos esenciales de CSS con explicaciones claras y ejemplos detallados.

---

## 1. ¿Cómo conectar CSS con HTML?
Existen tres maneras de aplicar CSS en un documento HTML:

### a) CSS en línea (Inline CSS)
Se aplica directamente en los elementos HTML mediante el atributo `style`. Es útil para cambios rápidos, pero no se recomienda en proyectos grandes debido a la dificultad de mantenimiento.

```html
<p style="color: blue; font-size: 16px;">Este es un texto azul.</p>
```

### b) CSS interno (Internal CSS)
Se define dentro de una etiqueta `<style>` en el `<head>` del documento. Se usa cuando los estilos son específicos de una sola página.

```html
<head>
    <style>
        p {
            color: red;
            font-size: 18px;
        }
    </style>
</head>
```

### c) CSS externo (External CSS)
Se escribe en un archivo separado (`styles.css`) y se enlaza con `<link>`. Es la mejor práctica para mantener el código limpio y reutilizable.

```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```
```css
p {
    color: green;
    font-size: 20px;
}
```

---

## 2. Tipos de selectores en CSS
Los selectores permiten aplicar estilos a elementos específicos.

### a) Selector de tipo (por etiqueta)
Selecciona todos los elementos de un tipo específico.
```css
h1 {
    color: blue;
}
```

### b) Selector de clase
Selecciona elementos con una clase específica.
```css
.destacado {
    font-weight: bold;
}
```
```html
<p class="destacado">Este texto está en negrita.</p>
```

### c) Selector de ID
Selecciona un único elemento con un ID específico.
```css
#titulo-principal {
    font-size: 24px;
}
```
```html
<h1 id="titulo-principal">Título Principal</h1>
```

---

## 3. Modelo de Caja en CSS
Todo elemento HTML es una caja con las siguientes propiedades:

- **Content:** El contenido del elemento.
- **Padding:** Espacio interno entre el contenido y el borde.
- **Border:** El borde del elemento.
- **Margin:** Espacio externo entre el elemento y otros elementos.

### Configuración de `margin` y `padding`
Podemos definir `margin` y `padding` de varias maneras:

1. **Un solo valor** (aplica a los cuatro lados):
```css
.caja {
    margin: 10px;  /* 10px en todos los lados */
    padding: 15px; /* 15px en todos los lados */
}
```

2. **Valores para arriba y abajo / izquierda y derecha:**
```css
.caja {
    margin: 10px 20px; /* 10px arriba/abajo, 20px izquierda/derecha */
    padding: 5px 15px; /* 5px arriba/abajo, 15px izquierda/derecha */
}
```

3. **Valores individuales (arriba, derecha, abajo, izquierda):**
```css
.caja {
    margin: 10px 15px 20px 25px; /* Arriba, Derecha, Abajo, Izquierda */
    padding: 5px 10px 15px 20px; /* Arriba, Derecha, Abajo, Izquierda */
}
```

---

## 4. Posicionamiento en CSS
Determina cómo se colocan los elementos en la página.

### a) `static` (por defecto)
Los elementos siguen el flujo normal del documento.
```css
div {
    position: static;
}
```

### b) `relative`
El elemento se mueve en relación con su posición original.
```css
div {
    position: relative;
    top: 10px;
    left: 20px;
}
```

### c) `absolute`
El elemento se posiciona respecto a su primer ancestro con `position: relative` o, en su defecto, al `<html>`.
```css
div {
    position: absolute;
    top: 50px;
    left: 100px;
}
```

### d) `fixed`
El elemento permanece fijo en la pantalla, aunque se haga scroll.
```css
div {
    position: fixed;
    bottom: 10px;
    right: 10px;
}
```

---

## 5. Estilos de Texto
Para modificar la apariencia del texto, CSS ofrece diversas propiedades:

```css
.texto {
    font-family: Arial, sans-serif;
    font-size: 18px;
    color: #333;
    text-align: center;
    text-decoration: underline;
    letter-spacing: 2px; /* Espaciado entre letras */
    word-spacing: 5px; /* Espaciado entre palabras */
}
```

---

## 6. Ancho y Alto
Podemos definir el tamaño de los elementos con `width` y `height`.
```css
div {
    width: 300px;
    height: 150px;
}
```

También podemos usar `max-width`, `min-width`, `max-height`, y `min-height`.
```css
div {
    max-width: 500px;
    min-height: 200px;
}
```

---

Esta guía cubre los conceptos básicos y esenciales de CSS con explicaciones detalladas y ejemplos variados. Puedes expandir con más propiedades y prácticas avanzadas según sea necesario. 🚀
