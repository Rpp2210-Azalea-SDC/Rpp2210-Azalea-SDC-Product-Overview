# Rpp2210-Azalea-SDC-Product

Refactored monolithic ecommerce backend microservice optimized to support high traffic 

Mongoose(Non-relational) | PostgreSQL(Relational)- Slow | Loader.io | K6 | AWS | NGINX | Redis 

Structured Schema used to plan out the Database Structure:

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/72963a4a-ba86-4f0c-820e-dc9cf773d772)

Created Database and Tables to match Schema.

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/51ce1961-0eac-4f83-b412-9b5c14d9f623)


PostgreSQL server can handle multiple concurrent connections from clients.

Created ETL to unify data being imported into DB locally.

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/b8bdec6a-b521-4223-8859-336de5db778e)

Improved PostgreSQL DB queries speed from 25s to 0.30ms by analyzing execution plans and implementing indexes and aggregations

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/10fca92a-56f6-4723-87a5-451329db0763)

Migrated over the Data to AWS EC2 Instance through PostgreSQL built in migration function.

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/74ea032a-f612-429a-a6a2-86fb52009bbe)
![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/acbdc59a-4c76-45ce-834a-ce3ecb3d4d62)


Scaled application to sustain 4000 RPS by horizontally scaling with NGINX through 4 AWS instances and Redis caching
![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/558997e0-0bbd-459c-94c7-175e0669b369)

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/cb8c7ed3-9a47-4d91-b29d-1f6dc3e0dfa9)

Performance Testing:

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/1c5ed368-42c7-4799-82e0-4394d123a430)

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/301be2a7-2060-4b44-9c90-98e8ba32be7a)
