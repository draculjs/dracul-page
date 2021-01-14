[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
# Modulo Dracul Queue-backend 

El Modulo Queue-backend te permite visualizar los workers con sus tareas agregadas, finalizadas, pendientes, tomadas y fallidas. 

## Requerimientos
-Graphql (Apollo Server)

## Este módulo te permite:

- Obtener las estadisticas de cada worker en proceso en la cola.

## Instalación

```
npm i @dracul/queue-backend
```

## Ejemplo de uso

_Types y resolvers._

```js
import {types,resolvers} from '@dracul/queue-backend'
```

_Permisos para usarlo_

```js
import {QUEUE_SHOW} from "@dracul/queue-backend/lib/permissions"
```

### Querys Grapqhql

- queueStats: devuelve un array de workers con los trabajos en cada estado pertenecientes a una cola

```graphql endpoint
queueStats: [QueueStats]

QueueStats{
    topic: String!
    added: Int
    gotten: Int
    failed: Int
    done: Int
}
```

**Datos que retorna el servicio**
Retorna un Array del type QueueStats. Este type contiene:
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
<table>
  <tr>
    <th>Nombre</th>
    <th>Tipo</th>
    <th>Descripcion</th>
  </tr>
  <tr>
    <td>topic</td>
    <td>String</td>
    <td>Topico del worker que esta en proceso</td>
  </tr>
  <tr>
    <td>added</td>
    <td>Int</td>
    <td>Cantidad de tareas agregadas al worker</td>
  </tr>
  <tr>
    <td>gotten</td>
    <td>Int</td>
    <td>Cantidad de tareas tomadas en el worker</td>
  </tr>
  <tr>
    <td>failed</td>
    <td>Int</td>
    <td>Cantidad de tareas que fallaron en el worker</td>
  </tr>
  <tr>
    <td>done</td>
    <td>Int</td>
    <td>Cantidad de tareas finalizadas en el worker</td>
  </tr>
  <tr>
</table>
---

- queues: devuelve un array de workers con su informacion correspondiente 

```graphql endpoint
queues: [Queue]

type Queue{
    blockedUntil: String
    workerHostname: String
    workerId: String
    retries: Int
    topic: String!
    payload: String
    done: Boolean
    error: String
}
```

**Datos que retorna el servicio**
Retorna un Array del type Queue. Este type contiene:
<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
<table>
  <tr>
    <th>Nombre</th>
    <th>Typo</th>
    <th>Descripcion</th>
  </tr>
  <tr>
    <td>blockedUntil</td>
    <td>String</td>
    <td>Fecha de retraso de ejecución</td>
  </tr>
  <tr>
    <td>workerHostname</td>
    <td>String</td>
    <td>Nombre del worker que lo procesa</td>
  </tr>
  <tr>
    <td>workerId</td>
    <td>String</td>
    <td>Identificador único del worker</td>
  </tr>
  <tr>
    <td>retries</td>
    <td>Int</td>
    <td>cantidad de reintentos de ejecución</td>
  </tr>
  <tr>
    <td>topic</td>
    <td>String</td>
    <td>topico de la tarea</td>
  </tr>
  <tr>
    <td>payload</td>
    <td>String</td>
    <td>Contenido de la tarea</td>
  </tr>
  <tr>
    <td>done</td>
    <td>Boolean</td>
    <td>'true' si la tarea fue exitosa, caso contrario la tarea falló </td>
  </tr>
  <tr>
    <td>icon</td>
    <td>String</td>
    <td>icono de la tarea </td>
  </tr>
  <tr>
    <td>error</td>
    <td>String</td>
    <td>descripción del error si ocurre </td>
  </tr>
</table> 
---


### Recomendacion
Se aconseja utilizar scafol dónde tenés todos los módulos ya integrados y link de scafold

https://github.com/draculjs/scaffold


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[stars-shield]: https://img.shields.io/github/stars/draculjs/modular-framework.svg?style=flat-square
[stars-url]: https://github.com/draculjs/modular-framework/stargazers
[contributors-shield]: https://img.shields.io/github/contributors/draculjs/modular-framework.svg?style=flat-square
[contributors-url]: https://github.com/draculjs/modular-framework/graphs/contributors
