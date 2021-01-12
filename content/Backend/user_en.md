# User Module

<br>

It provides models, services, components and pages for the management and authentication of the application users. It has a stateless approach handling authentication through JWT and implements RBAC (Role Based Access Control) for the management of roles and permissions.

<br>

## Installation

```
npm i @dracul/user-backend
```

<br>

---
## Main BACKEND services

<br>

Use of Middleware by the app:

*apps/api/src/index.js*

    import {jwtMiddleware, corsMiddleware, rbacMiddleware, sessionMiddleware} from '@dracul/user-backend'

    const app = express();
    const httpServer = createServer(app);

    app.use(corsMiddleware)

<br>

Merge of Resolvers with proyect resolvers and Types with proyect types:

*apps/api/src/modules-merge.js*

    import {securityResolvers,securityTypes} from '@dracul/user-backend'

<br>

Use of module init for permission verification:

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

## Requisites
- -store
- -i18n
- -vuetify
- -apollo client
- -router

<br>

## Stack & Dependencies
- -Nodejs
- -Express
- -Mongoose
- -Nodemailer
- -Graphql (Apollo Server)
- -JWT Auth

<br>

## Dependencies
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

## Dev Dependecies
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

## Recommendation

It is recommended to use Scaffold, where you already have all the modules implemented to be able to use it as a project base.

https://github.com/draculjs/scaffold