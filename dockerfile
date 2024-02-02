# Use a imagem base do WordPress
FROM wordpress:latest

LABEL name = "WordPress/Tainacan"

# Instale o WP-CLI para gerenciar o WordPress via linha de comando
RUN apt-get update && apt-get install -y less \
    && rm -rf /var/lib/apt/lists/* \
    && curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
    && chmod +x wp-cli.phar \
    && mv wp-cli.phar /usr/local/bin/wp

# Instale e ative o plugin Tainacan usando o WP-CLI
RUN sudo -u debian -i --wp plugin install tainacan --activate