#!/bin/bash
set -e

# Espera até que o MySQL esteja pronto
until mysqladmin ping -h"db" --silent; do
  sleep 1
done

# Ativa o plugin Tainacan
wp plugin activate tainacan --allow-root --path=./tainacan

# Continua com o comando original do Docker
exec "$@"
