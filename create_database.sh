#!/bin/bash

# Load environment variables from .env file
source .env

PGHOST=$HOST_DB
PGUSER=$USERNAME_DB
PGPASSWORD=$PASSWORD_DB
PGPORT=$PORT_DB
DB_NAME=movie_db

docker exec -i docker-db-1 psql -h $PGHOST -p $PGPORT -U $PGUSER -c "CREATE DATABASE ${DB_NAME};"
docker exec -i docker-db-1 psql -h $PGHOST -p $PGPORT -U $PGUSER -d $DB_NAME -c "CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";"