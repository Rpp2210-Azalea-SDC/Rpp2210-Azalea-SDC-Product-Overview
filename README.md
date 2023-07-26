# Rpp2210-Azalea-SDC-Product

Refactored monolithic ecommerce backend microservice optimized to support high traffic 

Mongoose(Non-relational) | PostgreSQL(Relational) | Loader.io | K6 | AWS | NGINX | Redis 

Structured Schema used to plan out the Database Structure:

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/be35a3d7-5684-4eef-b082-19317bf26491)

Created Database and Tables to match Schema.

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/bb0efdc2-ba23-4ac6-a712-c9daa3985e8d)

PostgreSQL server can handle multiple concurrent connections from clients.

Created ETL to unify data being imported into DB locally.

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/02792552-1bdc-4a9d-be55-d0fb2c8c34ec)

Improved PostgreSQLqueries speed from 25s to 0.30ms by analyzing execution plans and implementing indexes and aggregations

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/ec0d91dc-21c3-425d-810e-51f81924ac16)

Migrated over the Data to AWS EC2 Instance through PostgreSQL built-in migration function.

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/d70f99e5-9b62-48b8-acec-a454ed313bf9)

Successfully imported Data to AWS EC2 instance!

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/87f8604b-cd0c-4bc5-bb36-76d63f43490d)

Scaled application to sustain 4000 RPS by horizontally scaling with NGINX through 4 AWS instances and Redis caching

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/ea6ab681-3e80-4ee2-be4f-6e929925b3fd)

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/96c3a332-4c45-4441-89be-62285cb09574)

Performance Testing:

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/6ef6b59d-0a92-4a81-8818-1b47a99ba142)

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/210d2f52-3b03-4171-9ec6-8cd13a7e86e2)

