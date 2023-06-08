#!/bin/bash

# Load environment variables from .env file
source .env

PGHOST=$HOST_DB
PGUSER=$USERNAME_DB
PGPASSWORD=$PASSWORD_DB
PGPORT=$PORT_DB

docker exec -i docker-db-1 psql -h $PGHOST -p $PGPORT -U $PGUSER -c "CREATE DATABASE micro_videos;"