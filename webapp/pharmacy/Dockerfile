FROM php:5-apache
RUN apt-get update && apt-get upgrade -y && apt-get install -y libmcrypt-dev
RUN docker-php-ext-install mcrypt && docker-php-ext-install mysqli && docker-php-ext-enable mysqli mcrypt
RUN apt-get autoremove && a2enmod rewrite
COPY php.ini /usr/local/etc/php
# COPY src/ /var/www/html/