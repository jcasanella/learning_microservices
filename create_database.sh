#!/bin/bash

# Load environment variables from .env file
source .env

PGHOST=$HOST_DB
PGUSER=$USERNAME_DB
PGPASSWORD=$PASSWORD_DB
PGPORT=$PORT_DB
DB_NAME=movie_db
DB_EVENT=event_store

docker exec -i docker-postgres-1 psql -h $PGHOST -p $PGPORT -U $PGUSER -c "CREATE DATABASE ${DB_NAME};"
docker exec -i docker-postgres-1 psql -h $PGHOST -p $PGPORT -U $PGUSER -c "CREATE DATABASE ${DB_EVENT};"
docker exec -i docker-postgres-1 psql -h $PGHOST -p $PGPORT -U $PGUSER -d $DB_NAME -c "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";"
docker exec -i docker-postgres-1 psql -h $PGHOST -p $PGPORT -U $PGUSER -d $DB_EVENT -c "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";"