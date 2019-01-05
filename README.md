# Actipro-Manager

### Step one: Creating a Database

In console:

* sudo -u postgres createuser user2

* sudo -u postgres createdb user2

* sudo -u postgres psql

* psql=# alter user <username> with encrypted password '<password>';

* psql=# grant all privileges on database <dbname> to <username> ;

Accesing the database:

* psql -U user2 -d user2 -h localhost -W