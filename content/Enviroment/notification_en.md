# Dracul notification module frontend environment variables 

### This module requires the configuration of the following environment variables:

|Name  |Type | Description |
|----------|----------|------|
|`VUE_APP_ACTIVATE_WEB_SOCKET`   |Boolean  |'true' if you want to activate notifications by websocket, 'false' if you want to activate them by polling  |                                   
|`VUE_APP_TIME_POLLING`  |Integer   |The time in milliseconds it waits to request the notifications again (In case the notifications by polling are activated)|  

### Usage example

```
VUE_APP_TIME_POLLING = 30000

VUE_APP_ACTIVATE_WEB_SOCKET = true
```

---
