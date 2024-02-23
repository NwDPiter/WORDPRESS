# Variáveis ambiente do wordpress

WORDPRESS_DB_HOST: Especifica o host do banco de dados MySQL.

WORDPRESS_DB_USER: O usuário do banco de dados para o WordPress.

WORDPRESS_DB_PASSWORD: A senha do usuário do banco de dados do WordPress.

WORDPRESS_DB_NAME: O nome do banco de dados usado pelo WordPress.

WORDPRESS_TABLE_PREFIX: O prefixo para todas as tabelas do banco de dados do WordPress.

WORDPRESS_DEBUG: Se definido como "true", ativa o modo de depuração do WordPress.

WORDPRESS_CONFIG_EXTRA: Configuração adicional do WordPress que você deseja adicionar ao arquivo wp-config.php.

WORDPRESS_DISABLE_CRON: Se definido como "true", desativa o sistema de cron interno do WordPress.

WORDPRESS_CONFIG_FILE_PATH: O caminho personalizado para o arquivo wp-config.php.


# Variáveis ambiente do PHP

PHP_INI_*: Você pode definir configurações específicas do PHP diretamente usando variáveis de ambiente com o prefixo PHP_INI_. Por exemplo, PHP_INI_MEMORY_LIMIT pode ser usado para definir o limite de memória do PHP.

PHP_FPM_*: Variáveis de ambiente específicas para o PHP-FPM. Por exemplo, PHP_FPM_PM para definir o gerenciador de processos do PHP-FPM.

PHP_ERROR_LOG: Caminho para o arquivo de log de erros do PHP.

PHP_DISPLAY_ERRORS: Define se os erros do PHP devem ser exibidos ou não.

PHP_UPLOAD_MAX_FILESIZE: Define o tamanho máximo de upload de arquivo permitido.

PHP_POST_MAX_SIZE: Define o tamanho máximo permitido para dados POST.

PHP_MAX_EXECUTION_TIME: Define o tempo máximo de execução de um script PHP.

PHP_DATE_TIMEZONE: Define o fuso horário padrão do PHP.

PHP_EXTENSION: Você pode carregar extensões PHP adicionais definindo variáveis de ambiente com o prefixo PHP_EXTENSION.

PHP_XDEBUG_ENABLED: Para habilitar ou desabilitar o Xdebug.


# Variáveis ambiente do BD

MYSQL_ROOT_PASSWORD: A senha do usuário root do MySQL. É uma variável obrigatória.

MYSQL_DATABASE: O nome do banco de dados que será criado automaticamente na inicialização do contêiner MySQL.

MYSQL_USER: O nome de usuário do banco de dados MySQL.

MYSQL_PASSWORD: A senha do usuário do banco de dados MySQL.

MYSQL_ALLOW_EMPTY_PASSWORD: Se definido como "yes", permite que o usuário root do MySQL não tenha uma senha definida.

MYSQL_RANDOM_ROOT_PASSWORD: Se definido como "yes", gera automaticamente uma senha aleatória para o usuário root do MySQL.

MYSQL_ONETIME_PASSWORD: Se definido como "yes", define a senha do usuário root como uma senha temporária que precisa ser alterada na primeira conexão.