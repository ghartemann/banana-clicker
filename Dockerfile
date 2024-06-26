#
# Stage 1 - Prep App's PHP Dependencies
#
FROM composer:latest AS vendor

WORKDIR /app

COPY composer.json composer.json
COPY composer.lock composer.lock

RUN composer install \
    --ignore-platform-reqs \
    --no-interaction \
    --no-plugins \
    --no-scripts \
    --prefer-dist \
    --quiet


# end Stage 1 #

FROM php:8.0-fpm-alpine AS phpserver

# add cli tools
RUN apk update \
    && apk upgrade \
    && apk add nginx

# silently install 'docker-php-ext-install' extensions
RUN set -x

RUN docker-php-ext-install pdo_mysql bcmath > /dev/null

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /var/www

COPY . /var/www/
COPY --from=vendor /app/vendor/ /var/www/vendor

EXPOSE 80

COPY docker-entry.sh /etc/entrypoint.sh
RUN chmod +x /etc/entrypoint.sh

ENTRYPOINT ["/etc/entrypoint.sh"]
