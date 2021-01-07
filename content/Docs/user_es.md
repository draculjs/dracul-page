# CRM Ciudadano  

<br>

El siguiente archivo es un instructivo de uso del modulo de usuario de la plataforma **CRM ciudadano**. En el mismo se buscara describir las funcionalidades principales de dicho modulo, estas son:  

1. 1) Funcionalidades de la sesion de usuario 
    + -Iniciar sesion
    + -Cerrar sesion
    + -Registro de usuario
        + -Activacion de usuario
    + -Recuperar contraseña
    + -Cambiar contraseña
    + -Cambiar avatar
2.  2) Funciones de administrador 
    + -Administracion de usuarios y contraseñas
    + -Administracion de roles
    + -Administracion de grupos
    + -Dashboard de administrador

<br>

---
---
<br>

# Funcionalidades de la sesion de usuario

<br>

En esta seccion detallaremos las distintas funcionalidades para la configuracion, creacion y edicion del usuario propio en la plataforma.

----
## Iniciar sesion    

Para acceder a todas las funcionalidades de la herramienta se debe iniciar sesion en la misma con sus datos de usuario.

En caso de no tener usuario ver la seccion de [*Registro de usuario*](#registro-de-usuario)

Al acceder a la plataforma la primer pantalla le solicitara su usuario y contraseña, los mismos que se deben tener con anterioridad. En la misma se debe completar los datos y presionar el boton de iniciar sesion para ingresar a todas las funcionalidades de la herramienta. 

En caso de no recordar la contraseña ver la seccion de [*Recuperar contraseña*](#recuperar-contraseña)

## Cerrar sesion

Una vez finalizada la experiencia de usuario se debe cerrar la sesion. Esto es imporatnte para proteger la informacion personal y evitar el ingreso a la plataforma de personas otras que el usuario.

Para esto se debe hacer click en el avatar de usuario en la esquina superior derecha de la pantalla donde se mostraran la informacion del usuario loggeado, y debajo de este las opciones de visitar su perfil y de cerrar sesion.: 
~~~~  
usuario
 usuario@dominio.com
-------------------
 Perfil
 Cerrar sesion
~~~~
Al hacer click en el segundo se procedera a cerrar la sesion.

-----
## Registro de usuario

Se accedera a esta fucnionalidad la primera vez que se este utilizando la plataforma. El mismo se enceuntra debajo del inicio de sesion como: *"Still dont have an user? Sign up"*. Al hacer click en este enlace se accede a la pantalla de registro de usuario.

Para registrar un usuario nuevo se piden una serie de datos:
- Nombre
- Apellido
- Email
- Contraseña
- Telefono

<br>
Estos son todos obligatorios a excepcion del numero de telefono. Al completar dicho formulario debe darle click en *Sign up*, y, en caso de ser toda la informacion valida, sera redirigido a una pantalla donde le aparecera un mensaje de registrado correctamente, y se mostrara la direccion de correo electronico a la cual se le envio la confirmacion para la activacion de su usuario.<br><br>

## Activacion de usuario

Debe ingrear al mail provisto en el registro de usuario y buscar el mail de la casilla de **loquesaea@sondeos.com.ar**, en el mismo se le pedira que confirme que usted creo el usuario con ese mail. Luego de confirmar sera redirigido a la pagina de CRM y su usuario sera creado correctamente.

----

## Recuperar contraseña

Esta instancia esta diseñada en caso de que ya tenga un usuario en la plataforma pero no recordue la clave de ingreso del mismo. 

Para recuperar la contraseña de debe hacer click en la frase *"Forgot your password?"* que esta debjo del boton de inicio de sesion en la pantalla de logeo. Al hacer eso sera redirigido a una pantalla de recuperacion de contraseña donde se le solicitara el email con el que se registro inicialmente en la plataforma, al cual le enviaremos el instructivo para recuperar su contraseña.


## Cambiar contraseña

Si en algun punto se decide cambiar la contrseña de usuario, sea por comodidad o seguridad, u otra razon, se debe ingresar al perfil de usuario y seleccionar dicha opcion. 

Para hacer esto se debe primero iniciar sesion. Una vez en la pantalla principal, buscar el avatar en la esquina superior derecha, darle click y del desplegable que aparece seleccinar la opcion `Perfil`. Entonces se desplegara un recuadro con los datos del usuario (Nombre, Email y Telefono), y debajo un boton de `Recuperar contraseña`, el cual se debe clickear para avanzar. Al hacer click en dicho boton aparecera un formulario que solicitara primero la contraseña actual para permitir el cambio de contraseña y debajo la nueva contraseña con la confirmacion de la misma. Se debe completar el fromulario y enviarlo para finalizar la modificacion.

-----
## Cambiar avatar

El avatar, siendo este una representación gráfica o imagen que se asocia a un usuario en la plataforma, se debe elegir una vez confirmado el usuario, ya que no se solicita durante la creacion del mismo.

Para hacer esto se debe primero iniciar sesion. Una vez en la pantalla principal, buscar el avatar en la esquina superior derecha, darle click y del desplegable que aparece seleccinar la opcion `Perfil`. Entonces se desplegara un recuadro con los datos del usuario (Nombre, Email y Telefono), encabezado por una imagen predeterminada, que para modificarla debera hacerse click sobre esta imagen, lo que abrira el explorador de la computadora para elegir la imagen que sera su nuevo avatar.

<br>

-----
-----

<br>

# Funciones de administrador
En esta seccion se detallarn las funciones correspondietnes a un usuario administrador, las mismas son la posibilidad de creacion, edicion y control de todos los usuarios, sus roles y los distintos grupos, junto con la visualizacion de un dashboard general de control.

Para acceder a estas funciones, una vez iniciada la sesion se debe ir a la esquina superior izquierda de la pantalla, y hacer click sobre el icono de menu(3 rayas horizontales). Se desplegara un menu lateral con varias opciones:

|   Menu      |
|:------------|
|-------------|
|  Principal  |
| Acerca de   |
| Campañas    |
| Ciudadanos  | 
|  Empresas   |
|Administrador|

<br>

En esta  ultima opcion de **Administrador** se encontraran todas las funciones que se mencionaron y que explicaremos a continuacion.


----

## Administracion de usuarios

Desde esta  pantalla se puede visualizar, editar y crear nuevos usuarios.
Al ingresar a la pantalla de administracion de usuarios se puede observar una lista de todos los usuarion asignados a la la sesion del administrador, con la informacion de los mismos.
    
|Nombre   | Usuario  |  Email   |Telefono|Rol  |Activo  |Acciones  |
|---------|----------|----------|--------|-----|--------|----------|
|   Juan  |  JPerez  | JP@jp.com| 12345  | Op. |  True  |  CRUD    |

<br>

A partir de esta informacion se puede utilizar la barra de busqueda para filtrar usuarios por cualquiera de estos datos y clickear en los titulos de las columnas para ordenar las listas. Asi como tambn hay una serie de acciones que se pueden tomar para cada usuario segun la accion que se elija en la ultima columna de la lista:
- -Ver info del usuario: Despliega toda la informacion del usuario
- -Apikey: Permite obtener la **apikey** del usuario
- -Editar: Permite editar toda la info del usuario, incluyendo rol, grupo y si esta activo o no.
- -Contraseña: Permite **modificar la contraseña** del usuario seleccionado
- -Eliminar: Elimina el usuario

<br>

Para **crear un nuevo usuario** se debe seleccionar el simbolo **(+)** en la esquina inferior derecha, al hacer click en este se despliega el fomrulario para creacion de usuaruios con toda la informacion necesaria.

----

## Administracion de roles

Los roles sirven para manejar los permisos que cada usuario tiene dentro de la plataforma. Desde esta  pantalla se puede visualizar, editar y crear nuevos roles.
Al ingresar a la pantalla de administracion de roles se puede observar una lista de todos los permisos de la plataforma y cuales de estos estan asignados a cada rol.

|Permisos   | Rol 1 |Rol 2|
|--------   | :----:|:---:|
| Permiso 1 |    si | no  |
| Permiso 2 |   si  | si  |

<br>

Debajo de cada rol hay 2 iconos, editar y eliminar. El primero permite la edicion del rol, donde se puede modificar el nombre y cuales permisos tiene y cuales no. El otro elimina el rol de la plataforma.

Para **crear un nuevo rol** se debe seleccionar el simbolo **(+)** en la esquina inferior derecha, al hacer click en este se despliega el fomrulario para creacion de roles solicitando el nombre del rol con los permisos del mismo.

----

## Administracion de grupos

Los grupos sirven para clasificar a los usuarios por algo ams alla de su rol, como puede ser un proyeccto o sector especifico. Desde esta  pantalla se puede visualizar, editar y crear nuevos grupos.
Al ingresar a la pantalla de administracion de grupos se puede observar una lista de todos los grupos que fueron creados, con la informacion de los mismos.

|Avatar|  |Nombre | |Color| |Usuarios| |Acciones|
|------|--|-------|-|-----|-|--------|-|--------|
|   img|  |grupo 1| |rojo | |usA,usB | |CRUD   |

<br>

A partir de esta informacion se puede utilizar la barra de busqueda para filtrar los grupos por cualquiera de estos datos y clickear en los titulos de las columnas para ordenar las listas. Asi como tambien hay una serie de acciones que se pueden tomar para cada usuario segun la accion que se elija en la ultima columna de la lista:
- Ver info del grupo: Despliega toda la informacion del grupo
- Editar: Permite editar toda la informacion y los integrantes del grupo
- Eliminar: Elimina el grupo

<br>

Para **crear un nuevo grupo** se debe seleccionar el simbolo **(+)** en la esquina inferior derecha, al hacer click en este se despliega el fomrulario para creacion de usuaruios con toda la informacion necesaria y los integrantes del mismo.

---
## Dashboard de administrador

El dashboard de administrador es una pantalla en la cual se tiene un resumen de toda la informacion y los eventos principales de la empresa en la plataforma. Se puede acceder al mismo a traves del menu lateral izquierdo o mas rapidamente haciendo click en el icono que se encuentra a la izquierda del avatar en la esquina superior derecha de la pantalla.

Una vez dentro del dashboard se tiene unos botones con accesos directos a las pantallas de administracion de usuarios, roles y grupos explicadas anteriormente. Debajo de estos se puede observar una serie de cuadros y tablas de datos de uso de la plataforma:

### Resumen de sesiones de usuario
Es una tabla con los principales datos de sesion de cada usuario, incluyedno cantidad de sesiones, duracion promedio, pedidos, entre otros.

### Auditoria de usuarios
Registra las creaciones y modificaciones de los usuarios en la plataforma.

### Sesiones de cliente por navegador
Grafico de torta que explica el porcentaje de ingresos por navegador sobre el total de ingresos a la plataforma.

### Sesiones de cliente por OS
Grafico de torta que explica el porcentaje de ingresos por OS sobre el total de ingresos a la plataforma.

### Sesiones de cliente por dispositivo
Grafico de torta que explica el porcentaje de ingresos por tipo de dispositivo sobre el total de ingresos a la plataforma.

### Logins fallidos
Regustra los intentos de inicio de sesion fallidos.

### Sesiones por pais
Consta de un mapa en el caul se puede posicionar el cursor para identificar la cantidad de ingresos desde el lugar seleccionado.

### Sesiones por ciudad
Grafico de barras comparativo que muestra las cantidades de ingresos desde las distintas locaciones registradas.
