# Use a imagem oficial do WordPress como base
FROM wordpressdevelop/cli:latest

WORKDIR /var/www/html
# Copie o arquivo zip do Tainacan para o diretório /app/ no contêiner
COPY tainacan.zip var/www/html/wp-content/plugins/tainacan.zip

# Instale e ative o plugin Tainacan usando o WP-CLI
RUN wp plugin install /tainacan.zip --activate  --path=/var/ww/html --allow-root

# Defina o ponto de entrada padrão para o contêiner
ENTRYPOINT ["docker-entrypoint.sh"]

# Exponha a porta 80 para conexões HTTP
EXPOSE 80
