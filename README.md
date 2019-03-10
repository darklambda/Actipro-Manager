# Actipro-Manager

Acti-Pro Manager es una API-REST implementada tanto para ios/android
como para su uso en el navegador. Utiliza el Stack PEAN de tecnologias
además del uso del framework IONIC para la compilación de apk's.

### Tecnologias

* PostgreSQL: Base de datos relacional.

* Express/Node.JS: Servidor Interno.

* Ionic/Angular: Servidor Local y APK's.

### Definición

Actipro corresponde a una empresa dedicada a distintos rubros, entre ellos
el mantenimiento de extintores y otros elementos de seguridad. Por esto
decidieron crear esta aplicación con el motivo de mantener la información 
de dichos elementos en una base de datos.

### Instalación

### Step one: Creating a Database

In console:

* sudo -u postgres createuser user2

* sudo -u postgres createdb user2

* sudo -u postgres psql

* psql=# alter user <username> with encrypted password '<password>';

* psql=# grant all privileges on database <dbname> to <username> ;

Accesing the database:

* psql -U user2 -d user2 -h localhost -W

Viewing records from table:

* SELECT * FROM "Extinguishers";

### Step two: Initializing Servers

* Configurar config.json en carpeta back-end/config.

* Instalar node y npm.

* $ npm install en carpeta back-end (y ionic-end en caso de querer 
implementar aplicación por navegador).

### Step Three: Adding Management Classes

 As any REST API, you'll need to implement some HTTP requests to get
information from the DB. The libraries used for this app are

* HTTP for the native app http requests, which responds data as string
(and needs to be parsed with JSON.parse(res)).
* HttpClient for the web browser app, which responds the data as json.

If you need to create a new security elements like tools or hoses, you'll
first need to create de DB schema using ORM Sequelize. Then, create the routes
and controllers needed in their respect folder (routes & controllers) so
you will have every answer you need from the back end server.

Then, create (or generate using ionic g) every page (and it's respective 
service) to handle all the json's sended from the back-end.

Finally, arrange all the views so the information showed is in it's
place.

Also, every service/page as their own getSession method, which gets the user
that's already connected in the app. If a user is not connected and tries to
enter one of the views that are not "login", the app will redirect to this view.

### Conexión al VPS:

    ssh root@168.232.165.150 -p22222
    then password.

### Observaciones:

Niveles

    4 Administrador
    3 Trabajador de Mantenimiento
    2 Prevencionista de Riesgo
    1 Supervisor
    0 

Agregar Boton de DONE.

Pagina de Edicion y Eliminacion de Usuarios.

Creacion de Empresas.

Pagina de Edicion y Eliminacion de Empresas.

Agrear a Eform, calcular proxima renovacon y tiempo restante.

Estetica.

Montaje.