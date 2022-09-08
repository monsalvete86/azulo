1- Se debe crear la base de datos  que se va a usar

2- Configurar en el archivo flyway-9.2.1/conf/flyway.conf las variables
  flyway.url=
  flyway.user=root
  flyway.password=
3- Ubicarse en el directorio flyway-9.2.1 y ejecutar flyway migrate

4- Ubicate en el directorio raiz donde se encuentra el proyecto de flyway

5- Ejecutar: git clone https://github.com/directus/directus.git

6- cd .. directus

7- Ejectutar npx create-directus-procject name_proyect

8- Ubicarse en la carpeta airportart-api y configurar el archivo .env basandose en el archivo .env.example

9- Ejecutar el comando npm i

10- Ejecutar el comando tsc

11- Ejecutar el comando node ./dist/index.js 

12- Para probar el cambio de prioridad el endpoint es de tipo POST http://localhost/change_airport_priority
    la estructura de la data es:
        {
            "airports" : [
                {
                    "airport_id": 13, 
                    "new_operator_id": 6
                },
                {
                    "airport_id": 14, 
                    "new_operator_id": 4
                }
            ]
        }

13- Para probar el cambio de prioridad el endpoint es de tipo POST http://localhost/change_airport_operator
    la estructura de la data es:
        {
            "airport_id": 13, 
            "new_operator_id": 1
        }
