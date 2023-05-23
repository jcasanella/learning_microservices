# Video Streaming Platform

This is a video streaming platform built using microservices following an event-driven architecture and CQRS. The technologies used are TypeScript, Express.js and TypeORM.

## Description

The platform allows users to stream videos from their favorite creators. It is built using microservices to ensure scalability and reliability. The platform follows an event-driven architecture and CQRS to ensure that the system is responsive and can handle high traffic.

## Technologies

The platform is built using the following technologies:

- TypeScript
- Express.js
- TypeORM

## Migrations

We're implementing the migrations using TypeORM. This allows us to easily manage changes to the database schema as we continue to develop the platform.

### How to run the migrations

* `pnpm typeorm-ts-node-commonjs migration:run -d ./src/database/datasource.ts`


## References:

* Migrations: 
https://stackoverflow.com/questions/71803499/typeorm-when-trying-to-run-migrations-missing-required-argument-datasource
