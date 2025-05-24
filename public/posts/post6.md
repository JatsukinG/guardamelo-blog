# Guía de JavaScript - Fundamentos Básicos

## 1. Introducción a JavaScript

JavaScript es un lenguaje de programación dinámico y versátil, utilizado principalmente para desarrollo web. Es interpretado, no compilado, y permite crear aplicaciones interactivas.

## 2. Tipos de Datos

JavaScript maneja diferentes tipos de datos que se clasifican en dos categorías principales:

### Datos Primitivos

Los tipos primitivos son los datos más básicos del lenguaje:

#### String (Cadena de texto)
```javascript
let nombre = "Juan";
let apellido = 'Pérez';
let mensaje = `Hola ${nombre}`;
```

#### Number (Número)
```javascript
let edad = 25;
let precio = 99.99;
let negativo = -10;
```

#### Boolean (Booleano)
```javascript
let esEstudiante = true;
let tieneDescuento = false;
```

#### Undefined
```javascript
let variable; // undefined por defecto
console.log(variable); // undefined
```

#### Null
```javascript
let dato = null; // ausencia intencional de valor
```

#### Symbol (ES6+)
```javascript
let simbolo = Symbol('id');
```

#### BigInt (ES2020+)
```javascript
let numeroGrande = 1234567890123456789012345678901234567890n;
```

### Datos Compuestos (No Primitivos)

#### Object (Objeto)
```javascript
let persona = {
    nombre: "Ana",
    edad: 30,
    ciudad: "Madrid"
};

// Acceso a propiedades
console.log(persona.nombre); // "Ana"
console.log(persona["edad"]); // 30
```

#### Array (Arreglo)
```javascript
let numeros = [1, 2, 3, 4, 5];
let frutas = ["manzana", "pera", "uva"];
let mixto = [1, "texto", true, null];

// Acceso a elementos
console.log(numeros[0]); // 1
console.log(frutas.length); // 3
```

#### Function (Función)
```javascript
function saludar() {
    return "¡Hola!";
}

let despedir = function() {
    return "¡Adiós!";
};
```

## 3. Ciclos (Loops)

Los ciclos permiten repetir código múltiples veces.

### For
```javascript
// Estructura básica
for (let i = 0; i < 5; i++) {
    console.log("Iteración: " + i);
}

// For con array
let colores = ["rojo", "verde", "azul"];
for (let i = 0; i < colores.length; i++) {
    console.log(colores[i]);
}
```

### For...of (para arrays)
```javascript
let frutas = ["manzana", "pera", "uva"];
for (let fruta of frutas) {
    console.log(fruta);
}
```

### For...in (para objetos)
```javascript
let persona = {nombre: "Carlos", edad: 25, ciudad: "Lima"};
for (let propiedad in persona) {
    console.log(propiedad + ": " + persona[propiedad]);
}
```

### While
```javascript
let contador = 0;
while (contador < 3) {
    console.log("Contador: " + contador);
    contador++;
}
```

### Do...While
```javascript
let numero = 0;
do {
    console.log("Número: " + numero);
    numero++;
} while (numero < 3);
```

## 4. Funciones

Las funciones son bloques de código reutilizable.

### Declaración de Función
```javascript
function sumar(a, b) {
    return a + b;
}

let resultado = sumar(5, 3); // 8
```

### Expresión de Función
```javascript
let multiplicar = function(a, b) {
    return a * b;
};

let resultado = multiplicar(4, 7); // 28
```

### Funciones Flecha (Arrow Functions)
```javascript
let dividir = (a, b) => {
    return a / b;
};

// Versión corta (una sola expresión)
let restar = (a, b) => a - b;

// Un solo parámetro (sin paréntesis)
let cuadrado = x => x * x;
```

### Funciones con Parámetros por Defecto
```javascript
function saludar(nombre = "Invitado") {
    return `¡Hola, ${nombre}!`;
}

console.log(saludar()); // "¡Hola, Invitado!"
console.log(saludar("María")); // "¡Hola, María!"
```

## 5. Operadores de Comparación

### Operadores de Igualdad
```javascript
// Igualdad (==) - compara valor, convierte tipos
console.log(5 == "5"); // true
console.log(true == 1); // true

// Igualdad estricta (===) - compara valor y tipo
console.log(5 === "5"); // false
console.log(true === 1); // false
```

### Operadores de Desigualdad
```javascript
// Desigualdad (!=)
console.log(5 != "5"); // false

// Desigualdad estricta (!==)
console.log(5 !== "5"); // true
```

### Operadores de Comparación Numérica
```javascript
let a = 10;
let b = 5;

console.log(a > b);  // true (mayor que)
console.log(a < b);  // false (menor que)
console.log(a >= b); // true (mayor o igual que)
console.log(a <= b); // false (menor o igual que)
```

### Operadores Lógicos
```javascript
let edad = 20;
let tienePermiso = true;

// AND (&&)
if (edad >= 18 && tienePermiso) {
    console.log("Puede conducir");
}

// OR (||)
if (edad < 18 || !tienePermiso) {
    console.log("No puede conducir");
}

// NOT (!)
if (!tienePermiso) {
    console.log("Necesita permiso");
}
```

## 6. Ejemplos Prácticos

### Ejemplo 1: Calculadora Simple
```javascript
function calculadora(operacion, a, b) {
    switch(operacion) {
        case "sumar":
            return a + b;
        case "restar":
            return a - b;
        case "multiplicar":
            return a * b;
        case "dividir":
            return b !== 0 ? a / b : "Error: División por cero";
        default:
            return "Operación no válida";
    }
}

console.log(calculadora("sumar", 5, 3)); // 8
```

### Ejemplo 2: Análisis de Array
```javascript
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let pares = [];
let impares = [];

for (let numero of numeros) {
    if (numero % 2 === 0) {
        pares.push(numero);
    } else {
        impares.push(numero);
    }
}

console.log("Pares:", pares);     // [2, 4, 6, 8, 10]
console.log("Impares:", impares); // [1, 3, 5, 7, 9]
```

### Ejemplo 3: Validación de Datos
```javascript
function validarUsuario(usuario) {
    // Verificar que el objeto existe
    if (!usuario || typeof usuario !== "object") {
        return "Usuario inválido";
    }
    
    // Verificar propiedades requeridas
    if (!usuario.nombre || usuario.nombre.length < 2) {
        return "Nombre inválido";
    }
    
    if (!usuario.edad || usuario.edad < 0 || usuario.edad > 120) {
        return "Edad inválida";
    }
    
    return "Usuario válido";
}

let usuario1 = {nombre: "Ana", edad: 25};
let usuario2 = {nombre: "B", edad: -5};

console.log(validarUsuario(usuario1)); // "Usuario válido"
console.log(validarUsuario(usuario2)); // "Nombre inválido"
```

## 7. Consejos Importantes

### Buenas Prácticas
- Usa `===` en lugar de `==` para comparaciones
- Declara variables con `let` o `const` en lugar de `var`
- Usa nombres descriptivos para variables y funciones
- Comenta tu código cuando sea necesario

### Verificación de Tipos
```javascript
// Verificar tipo de dato
console.log(typeof "Hola");      // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (peculiaridad de JS)
console.log(typeof []);          // "object"
console.log(typeof {});          // "object"

// Para arrays, usar:
console.log(Array.isArray([])); // true
```

### Conversión de Tipos
```javascript
// String a Number
let texto = "123";
let numero = Number(texto); // 123
let numero2 = parseInt(texto); // 123
let numero3 = +texto; // 123

// Number a String
let num = 456;
let cadena = String(num); // "456"
let cadena2 = num.toString(); // "456"
```

---

¡Esta guía cubre los fundamentos esenciales de JavaScript! Practica estos conceptos con ejercicios y proyectos pequeños para dominar el lenguaje.