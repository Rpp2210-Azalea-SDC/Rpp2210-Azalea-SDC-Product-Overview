# Rpp2210-Azalea-SDC-Product

Refactored monolithic ecommerce backend microservice optimized to support high traffic 

Mongoose(Non-relational) | PostgreSQL(Relational)- Slow | Loader.io | K6 | AWS | NGINX | Redis 

Initial Mongoose Schema:

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/86ad15de-56e3-4ff1-b130-d62e1389d682)

Structured Schema used to plan out the Database Structure:

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/f0862f26-dd17-4623-8006-8a31014ce77f)

Created Database and Tables to match Schema.

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/51ce1961-0eac-4f83-b412-9b5c14d9f623)


PostgreSQL server can handle multiple concurrent connections from clients.

Created ETL to unify data being imported into DB.

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/8b9829b5-31c0-4d09-95a8-e2a8af08c1b4)

Improved PostgreSQL DB queries speed from 25s to 0.30ms by analyzing execution plans and implementing indexes and aggregations

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/10fca92a-56f6-4723-87a5-451329db0763)

Test for each query at ID = last 10% of Database:

Scaled application to sustain 4000 RPS by horizontally scaling with NGINX through 4 AWS instances and Redis caching

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/cb8c7ed3-9a47-4d91-b29d-1f6dc3e0dfa9)

Performance Testing:

![image](https://github.com/Rpp2210-Azalea-SDC/Rpp2210-Azalea-SDC-Product-Overview/assets/113706094/301be2a7-2060-4b44-9c90-98e8ba32be7a)
