# Use a imagem oficial do WordPress como base
FROM wordpress:latest

# Instale dependências do WP-CLI e do MySQL
RUN apt-get update && apt-get install -y \
    less \
    mariadb-client \
    && rm -rf /var/lib/apt/lists/*

# Instale o WP-CLI
RUN curl -o /usr/local/bin/wp https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
    && chmod +x /usr/local/bin/wp

# Instale e ative o plugin Tainacan
RUN wp plugin install tainacan.zip --path=/var/www/html/wp-content/plugin --activate --allow-root

# Defina o ponto de entrada padrão para o contêiner
ENTRYPOINT ["docker-entrypoint.sh"]

# Exponha a porta 80 para conexões HTTP
EXPOSE 80
