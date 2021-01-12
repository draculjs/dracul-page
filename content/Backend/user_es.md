# Modulo de Usuario

<br>

Provee modelos, servicios, componentes y páginas para la gestión y autenticación de los usuarios de la aplicación. Tiene un enfoque stateless manejando la autenticación mediante JWT e implementa RBAC (Role Based Access Control) para la gestión de roles y permisos.

<br>

## Instalación

```
npm i @dracul/user-backend
```
  
<br>

---
## Principales importacinoes del BACKEND

<br>

Uso de Middleware por parte de la app:

*apps/api/src/index.js*

    import {jwtMiddleware, corsMiddleware, rbacMiddleware, sessionMiddleware} from '@dracul/user-backend'

    const app = express();
    const httpServer = createServer(app);

    app.use(corsMiddleware)

<br>

Mergeo de Resolvers con resolvers del proyecto y Types con types del proyecto:
    
*apps/api/src/modules-merge.js*

    import {securityResolvers,securityTypes} from '@dracul/user-backend'

<br>

Utilizacion del init del modulo para la verificacion de permisos:

*apps/api/src/scripts/init.js*

    import {InitService} from '@dracul/user-backend'

    const init = async () => {
     
      await InitService.initPermissions([
          PERMISSIONS1,
          PERMISSIONS2
      ])
      await InitService.initAdminRole()
      await InitService.initRoles()
      await InitService.initRootUser()
      ...
    }

<br>

-----
-----
<br>

## Requisitos
- -store
- -i18n
- -vuetify
- -apollo client
- -router

<br>

## Stack & Dependencias
- -Nodejs
- -Express
- -Mongoose
- -Nodemailer
- -Graphql (Apollo Server)
- -JWT Auth

<br>

## Dependencias
```
  "dependencies": {
    "apollo-cache-inmemory": "^1.6.6",
    "apollo-client": "^2.6.10",
    "apollo-link": "^1.2.14",
    "apollo-link-error": "^1.1.13",
    "apollo-upload-client": "^13.0.0",
    "chart.js": "^2.9.3",
    "chartjs-plugin-labels": "^1.1.0",
    "core-js": "^3.6.5",
    "graphql": "^15.0.0",
    "jwt-decode": "^2.2.0",
    "moment": "^2.26.0",
    "moment-timezone": "^0.5.31",
    "vue": "^2.6.11",
    "vue-chartjs": "^3.5.0",
    "vue-i18n": "^8.18.1",
    "vue-map-chart": "0.0.2",
    "vue-router": "^3.3.2",
    "vuetify": "^2.2.11",
    "vuex": "^3.4.0"
  }
```
<br>

## Dev Dependencias
```
    devDependencies{
        "graphql-tag": "^2.10.3",
        "deepmerge": "^4.2.2"
    }
```
<br>

## Misc
- Storybook
- Test with jest

<br>

## vue.config.js
Add gql loader
```
module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  chainWebpack: (config) => {
    config.module
        .rule('gql')
        .test(/\.(graphql|gql)$/)
        .use('graphql-tag/loader')
        .loader('graphql-tag/loader')
        .end();
  }
}
```

-----------

## Recomendación

Se recomienda utilizar Scaffold, donde ya contiene todos los módulos implementados para poder usarlo como base de proyecto.

https://github.com/draculjs/scaffold
