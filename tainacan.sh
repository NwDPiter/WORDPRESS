#!/bin/bash

# Verifica se o curl está instalado, se não, instala
if ! [ -x "$(command -v curl)" ]; then
  echo 'Error: curl is not installed. Installing curl...' >&2
  sudo apt-get update
  sudo apt-get install -y curl
fi

# Baixa o arquivo wp-cli.phar
curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar

# Dá permissão de execução para o wp-cli.phar
chmod +x wp-cli.phar

# Move o wp-cli.phar para um diretório global
sudo mv wp-cli.phar /usr/local/bin/wp

# Verifica se a instalação do WP-CLI foi bem-sucedida
if [ -x "$(command -v wp)" ]; then
  echo 'WP-CLI has been successfully installed!'
else
  echo 'Error: WP-CLI installation failed.' >&2
  exit 1
fi

# Instala o plugin Tainacan usando o WP-CLI
sudo wp plugin install tainacan.0.20.6.zip --activate

# Verifica se a instalação e ativação do plugin foram bem-sucedidas
if [ $? -eq 0 ]; then
  echo 'Tainacan plugin has been successfully installed and activated!'
else
  echo 'Error: Tainacan plugin installation or activation failed.' >&2
  exit 1
fi
