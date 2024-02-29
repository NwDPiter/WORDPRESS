FROM wordpress:latest

# Instala o WP-CLI
RUN curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar \
    && chmod +x wp-cli.phar \
    && mv wp-cli.phar wp
    && mv wp /usr/local/bin/wp \
    && curl -O https://github.com/tainacan/src/tainacan.git
