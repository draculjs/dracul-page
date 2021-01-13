[![Contributors][contributors-shield]][contributors-url]
[![Stargazers][stars-shield]][stars-url]
# Dracul Queue-backend Module

The Queue Modules allow you to see workers stats in a queue. The stats are jobs added, jobs done, jobs pending and jobs gotten

## Requeriments
-Graphql (Apollo Server)

## This module allows:

- Get stats of workers in process in a queue.

## Installation

```
npm i @dracul/queue-backend
```

## Usage example

_Types and Resolvers._

```js
import {types,resolvers} from '@dracul/queue-backend'
```

_Permisses to use_

```js
import {QUEUE_SHOW} from "@dracul/queue-backend/lib/permissions"
```

### Querys Grapqhql

- queueStats: return an array of workers with all their jobs in each states in a queue

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

**Data returned by the service**

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
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>topic</td>
    <td>String</td>
    <td>Worker Topic in process.</td>
  </tr>
  <tr>
    <td>added</td>
    <td>Int</td>
    <td>Quantity jobs added</td>
  </tr>
  <tr>
    <td>gotten</td>
    <td>Int</td>
    <td>Quantity jobs gotten</td>
  </tr>
  <tr>
    <td>failed</td>
    <td>Int</td>
    <td>Quantity jobs failed</td>
  </tr>
  <tr>
    <td>done</td>
    <td>Int</td>
    <td>Quantity jobs done</td>
  </tr>
  <tr>
</table>


---
- queues: return an array of workers with their data 

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


Return an array of Queue type. This type contains:

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
    <th>Name</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>blockedUntil</td>
    <td>String</td>
    <td>Date delay to execute.</td>
  </tr>
  <tr>
    <td>workerHostname</td>
    <td>String</td>
    <td>worker Host Name of worker in process</td>
  </tr>
  <tr>
    <td>workerId</td>
    <td>String</td>
    <td>Unique Identifier of worker</td>
  </tr>
  <tr>
    <td>retries</td>
    <td>Int</td>
    <td>quantity retries to execute</td>
  </tr>
  <tr>
    <td>topic</td>
    <td>String</td>
    <td>job's Topic</td>
  </tr>
  <tr>
    <td>payload</td>
    <td>String</td>
    <td>job Content</td>
  </tr>
  <tr>
    <td>done</td>
    <td>Boolean</td>
    <td>'true' if job is succeced else job failed</td>
  </tr>
  <tr>
    <td>icon</td>
    <td>String</td>
    <td>'job icon</td>
  </tr>
  <tr>
    <th>error</th>
    <th>String</th>
    <th>description of error</th>
  </tr>
</table>
---

## Recommendation
It is recommended to use Scaffold, where you already have all the modules implemented to be able to use it as a project base.
https://github.com/draculjs/scaffold



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[stars-shield]: https://img.shields.io/github/stars/draculjs/modular-framework.svg?style=flat-square
[stars-url]: https://github.com/draculjs/modular-framework/stargazers
[contributors-shield]: https://img.shields.io/github/contributors/draculjs/modular-framework.svg?style=flat-square
[contributors-url]: https://github.com/draculjs/modular-framework/graphs/contributors
