# Video Streaming Platform

This project is to learn the basics behind an event-driven architecture. 
The idea is to simulate a platform as Netflix, for streaming videos, implemented with Microservices. The main technologies are:

* TypeScript
* Express.js
* Type-ORM
* Postgres
* Event-Store

## Description

The platform allows users to stream movies. It's built using microservices to ensure scalability and reliability. The platform follows an event-driven architecture and CQRS to ensure that the system is responsive and can handle high traffic.

## How to start the project

1. Start the containers with Postgres and EventStoreDb
```
cd docker
docker compose up
```

2. Postgres Database Creation
```
pnpm create-database
```

3. Run the migrations. This creates the required tables and ingest the data into Postgres
```
pnpm migration:up
```

4. Copy the static resources. Required until we use web-assembly
```
pnpm copy-files
``` 

5. Start the server (maybe you need to run the script twice)
```
pnpm start
```

By default uses port 8000

## References:

* Migrations: 
https://stackoverflow.com/questions/71803499/typeorm-when-trying-to-run-migrations-missing-required-argument-datasource
