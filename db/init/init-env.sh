#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
  CREATE USER lifehub;
  CREATE DATABASE lifehub;
  GRANT ALL PRIVILEGES ON DATABASE lifehub TO lifehub;
EOSQL
