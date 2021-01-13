# Instalación y Arranque del Proyecto

## Dracul Scaffold

proyecto base con SPA frontend y API backend con Grapqhql.

Este scaffold depende los modulos frameowork Dracul
- Monorepo: Frontend + API Graphql  
- Docker ready
- Stateless

# FRONTEND - SPA

### Tecnologías
- HTML, CSS, Javascript
- Vue, Vuex, Vuetify, VueI18n
- GraphqQL con Apollo Client
- JWT Auth

## Backend - API

### Tecnologías
- Javascript / Node
- GraphqQL con Apollo Server
- Mongo con Mongoose
- JWT Auth
- Emails con Nodemailer
- Logs con Winston

### Instalacion y Ejecución

- En /apps/frontend y /apps/apiand ejecutar:
    ```js
    $ npm install
    ```
- Create .env file in frontend and api (exist an example.env)
Crear el archivo .env frontend y api (existe ejemplos de estos archivos)
- Correr proyecto:
    - Frontend: 
    ```js
    $ npm run serve
    ```
    - Api: 
    ```js
    $ npm start
    ```