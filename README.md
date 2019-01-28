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

Viewing records from table:

* SELECT * FROM "Extinguishers";

Observaciones:
-Borrar vista ADMIN REG luego de finalizado el proyecto.

-Agregar GetSession en tab3 y metodos Qr.

-Agrupar información en fichas desplegables.
 
 NOT YET

-Cambiar nombre Forma por Ficha de Mantención.
 
 DONE

-Automatizar forma segun usuario.

-Cambiar opciones de futuro del extintor a: 
        Mantener
        Nueva Prueba.
        Dar de Baja.
        
        DONE
        
-Cambiar titulo de Mensajes de Alerta dependiendo de la situacion.

NOT YET

-Cambiar columnas de resultado por letras con simbología.

-Colocar borde inferior a resultados importantes.

-Dejar nombre de usuario actual al registrar formas. DONE

-Por empresa 
        