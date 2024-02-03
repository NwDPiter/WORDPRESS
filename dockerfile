# Use a imagem oficial do WordPress como base
FROM wordpressdevelop/cli:latest

# Copie o arquivo zip do Tainacan para o diretório /app/ no contêiner
COPY tainacan.zip /app/

# Instale e ative o plugin Tainacan usando o WP-CLI
RUN wp plugin install /app/tainacan.zip --activate --path=/var/www/html

# Defina o ponto de entrada padrão para o contêiner
ENTRYPOINT ["docker-entrypoint.sh"]

# Exponha a porta 80 para conexões HTTP
EXPOSE 80
