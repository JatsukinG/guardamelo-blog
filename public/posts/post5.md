# Fundamentos de React: Componentes, Estados y Hooks Básicos

## ¿Qué es React?

React es una biblioteca de JavaScript para construir interfaces de usuario. Fue desarrollada por Facebook (ahora Meta) y se centra en la creación de componentes reutilizables que muestran datos que pueden cambiar con el tiempo.

## Componentes: El Corazón de React

Los componentes son bloques de construcción independientes y reutilizables que encapsulan una parte de la interfaz de usuario. En React, existen dos tipos principales:

### Componentes Funcionales

Los componentes funcionales son funciones de JavaScript que retornan elementos React (JSX). Son la forma moderna recomendada para crear componentes:

```jsx
function Saludo(props) {
  return <h1>¡Hola {props.nombre}!</h1>;
}

// Uso:
<Saludo nombre="María" />
```

### Componentes de Clase (Legacy)

Aunque aún son compatibles, se recomienda usar componentes funcionales con hooks:

```jsx
import React, { Component } from 'react';

class Saludo extends Component {
  render() {
    return <h1>¡Hola {this.props.nombre}!</h1>;
  }
}
```

## Props: Pasando Datos a Componentes

Las props (propiedades) son la forma de pasar datos de un componente padre a un componente hijo:

```jsx
function Articulo(props) {
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>{props.contenido}</p>
    </div>
  );
}

// Uso:
<Articulo 
  titulo="Aprendiendo React" 
  contenido="React es una biblioteca increíble..." 
/>
```

## JSX: JavaScript + XML

JSX es una extensión de sintaxis para JavaScript que permite escribir marcado similar a HTML dentro de JavaScript:

```jsx
const elemento = <h1>Esto es JSX</h1>;
```

JSX se transforma en llamadas a `React.createElement()`:

```jsx
// El JSX anterior se convierte en:
const elemento = React.createElement('h1', null, 'Esto es JSX');
```

## Estado en React: El Hook useState

El estado permite a los componentes React almacenar y manipular datos que pueden cambiar con el tiempo, provocando re-renderizados cuando estos datos cambian.

### useState: El Hook Más Básico

```jsx
import React, { useState } from 'react';

function Contador() {
  // Declara una variable de estado "contador"
  // y una función para actualizarla "setContador"
  const [contador, setContador] = useState(0);
  
  return (
    <div>
      <p>Has hecho clic {contador} veces</p>
      <button onClick={() => setContador(contador + 1)}>
        Haz clic
      </button>
    </div>
  );
}
```

### Características Importantes del Estado:

1. **No modifiques el estado directamente**: Siempre usa la función actualizadora (como `setContador`).
2. **Las actualizaciones de estado pueden ser asíncronas**: React puede agrupar varias actualizaciones de estado por razones de rendimiento.
3. **Las actualizaciones de estado dependen del estado anterior**: Usa la forma de función para actualizar:

```jsx
// Forma correcta cuando el nuevo estado depende del anterior
setContador(contadorAnterior => contadorAnterior + 1);
```

## Efectos Secundarios: El Hook useEffect

Este hook te permite realizar efectos secundarios en componentes funcionales, como peticiones de datos, suscripciones o manipulación manual del DOM:

```jsx
import React, { useState, useEffect } from 'react';

function EjemploUseEffect() {
  const [datos, setDatos] = useState([]);
  
  useEffect(() => {
    // Este código se ejecuta después de que el componente se renderiza
    fetch('https://api.ejemplo.com/datos')
      .then(respuesta => respuesta.json())
      .then(datos => setDatos(datos));
      
    // Función de limpieza (opcional)
    return () => {
      // Código que se ejecuta antes de que el componente se desmonte
      console.log('Componente desmontado');
    };
  }, []); // El array vacío significa que este efecto se ejecuta solo una vez
  
  return (
    <div>
      <h1>Datos:</h1>
      <ul>
        {datos.map(item => (
          <li key={item.id}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
```

## Renderizado Condicional

En React, puedes renderizar diferentes elementos según ciertas condiciones:

```jsx
function SaludoCondicional({ estaLogueado }) {
  return (
    <div>
      {estaLogueado 
        ? <h1>Bienvenido de nuevo</h1>
        : <h1>Por favor, inicia sesión</h1>
      }
    </div>
  );
}
```

## Listas y Keys

Para renderizar listas de elementos, usa el método `map()` y proporciona una key única a cada elemento:

```jsx
function ListaDeTareas({ tareas }) {
  return (
    <ul>
      {tareas.map(tarea => (
        <li key={tarea.id}>{tarea.texto}</li>
      ))}
    </ul>
  );
}
```

La key ayuda a React a identificar qué elementos han cambiado, se han añadido o eliminado, mejorando el rendimiento.

## Manejo de Eventos

React maneja eventos de forma similar al DOM, pero con algunas diferencias sintácticas:

```jsx
function BotonClick() {
  function manejarClick() {
    alert('¡Botón clickeado!');
  }
  
  return (
    <button onClick={manejarClick}>
      Haz clic aquí
    </button>
  );
}
```

## Formularios en React

Los formularios funcionan un poco diferente en React debido al concepto de "componentes controlados":

```jsx
function Formulario() {
  const [nombre, setNombre] = useState('');
  
  function manejarEnvio(evento) {
    evento.preventDefault();
    alert(`Nombre enviado: ${nombre}`);
  }
  
  return (
    <form onSubmit={manejarEnvio}>
      <label>
        Nombre:
        <input 
          type="text" 
          value={nombre} 
          onChange={e => setNombre(e.target.value)} 
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}
```

## Composición de Componentes

React favorece la composición sobre la herencia. Puedes combinar componentes más pequeños para crear componentes más complejos:

```jsx
function Panel(props) {
  return (
    <div className="panel">
      <div className="panel-header">{props.titulo}</div>
      <div className="panel-body">{props.children}</div>
    </div>
  );
}

// Uso:
function App() {
  return (
    <Panel titulo="Bienvenido">
      <p>Este es el contenido del panel.</p>
    </Panel>
  );
}
```

## Fragmentos

Los fragmentos te permiten agrupar una lista de elementos hijos sin añadir nodos extra al DOM:

```jsx
function ListaItem() {
  return (
    <>
      <li>Item 1</li>
      <li>Item 2</li>
    </>
  );
}
```

## Contexto: Compartir Datos sin Pasar Props

El contexto permite compartir valores como preferencias de usuario o datos de autenticación sin pasar props explícitamente a través del árbol de componentes:

```jsx
// Crear un contexto
const TemaContexto = React.createContext('claro');

// Proveedor de contexto
function App() {
  return (
    <TemaContexto.Provider value="oscuro">
      <Toolbar />
    </TemaContexto.Provider>
  );
}

// Componente consumidor
function Toolbar() {
  return <BotonTema />;
}

// Componente que usa el contexto
function BotonTema() {
  const tema = React.useContext(TemaContexto);
  return <button className={tema}>Botón con Tema</button>;
}
```

## Conclusión

React proporciona un enfoque modular y eficiente para construir interfaces de usuario. Dominando estos conceptos fundamentales (componentes, props, estado, hooks, JSX), estarás en camino de crear aplicaciones web modernas y mantenibles. A medida que avances, podrás explorar características más avanzadas como memoización con useMemo y useCallback, manejo de estado global con Redux o Context API, y optimización de rendimiento.

Recuerda que la práctica constante es clave para dominar React. ¡Experimenta, construye proyectos y no tengas miedo de consultar la documentación oficial cuando sea necesario!