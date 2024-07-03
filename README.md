# Actipro-Manager

Actipro Manager is a Native/Web platform implemented for the management of inventory and maintenance scheduling of products. 

### Tech Stack

* PostgreSQL: Relational DB.
* Express/NodeJS: Backend Server.
* Ionic/Angular: Native/Web Platform.

### Company

Actipro is a company that offers services in different fields, including the retail of fire extinguishers and other security elements. The purpose of this platform is to integrate both the communication between Actipro and their clients (B2B), and to speed up the maintenance process of the products that need them.

### Install
#### Step one: Creating a Database

* `$sudo -u postgres createuser user2`
* `$sudo -u postgres createdb user2`
* `$sudo -u postgres psql`
* `psql=# alter user <username> with encrypted password '<password>';`
* `psql=# grant all privileges on database <dbname> to <username> ;`

##### Accessing the database:

* `psql -U user2 -d user2 -h localhost -W`

##### Checking records from tables:

* `SELECT * FROM "Extinguishers";`

#### Step two: Initializing Servers

* Configure the file config.json inside the folder back-end/config.
* Install node and npm.
* `$ npm install` inside the back-end folder (and the ionic-end folder in case you need the native app).

#### Step Three: Adding Management Classes

 As any REST API, you'll need to implement some HTTP requests to get
information from the DB. The libraries used for this app are:

* HTTP for the native app http requests, which responds data as string
(and needs to be parsed with JSON.parse(res)).
* HttpClient for the web browser app, which responds the data as json.

If you need to create a new security elements like tools or hoses, you'll
first need to create the DB schema using ORM Sequelize. Then, create the routes
and controllers required in their respect folder (routes & controllers) so
you will have every answer you require from the back end server.

Then, create (or generate using ionic g) every page (and it's respective 
service) to handle all the json's sent from the back-end.

Finally, arrange all the views, so the information is shown in its respective place.

Also, every service/page as their own getSession method, which gets information from the user 
that's already connected in the app. If a user is not signed in and tries to
enter one of the views that are not allowed, the app will redirect to the login view.

### Notes:
#### Permission levels

    4 Administrador
    3 Trabajador de Mantenimiento
    2 Prevencionista de Riesgo
    1 Supervisor
    0 Base


### TODO
[ ] Add done button.
[ ] Add user edit and delete view. 
[ ] Add company creation view.
[ ] Add company edit and delete view. 

Agrear a Eform, calcular proxima renovacon y tiempo restante.

Estetica.

Montaje.
