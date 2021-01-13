# Dracul módulo de notificaciones frontend, variables de entorno.

### Este modulo requiere de la configuracion de las siguientes variables de entorno:

|Nombre  | Tipo | Descripción |
|----------|----------|-----|
|`VUE_APP_ACTIVATE_WEB_SOCKET`   |Boolean  | 'true' si desea activar notificaciones por websocket, 'false' si desea activarlas por sondeo  |                                   
|`VUE_APP_TIME_POLLING`  |Integer   |El tiempo en milisegundos que espera para volver a solicitar las notificaciones (En el caso de que esten activadas las notificaciones por polling)| 

### Ejemplo de uso

```
VUE_APP_TIME_POLLING = 30000

VUE_APP_ACTIVATE_WEB_SOCKET = true
```
