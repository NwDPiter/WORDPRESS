# Use a imagem oficial do WordPress como base
FROM wordpressdevelop/cli:latest

# COPiadno tainacan
COPY /home/root/WORDPRESS/tainanca.zip /home/root/

# Instale e ative o plugin Tainacan
RUN wp plugin install tainacan.zip --activate --path=/home/root

# Defina o ponto de entrada padrão para o contêiner
ENTRYPOINT ["docker-entrypoint.sh"]

# Exponha a porta 80 para conexões HTTP
EXPOSE 80
