FROM php:7.4-apache
RUN apt-get update && apt-get upgrade -y && apt-get install -y libmcrypt-dev libpng-dev libzip-dev
RUN pecl install mcrypt-1.0.4 && docker-php-ext-enable mcrypt
RUN docker-php-ext-install gd
RUN docker-php-ext-install zip
RUN docker-php-ext-install mysqli
RUN apt-get autoremove && a2enmod rewrite
COPY php.ini /usr/local/etc/php
# COPY src/ /var/www/html/