FROM nginx

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY ./DockerContent /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/app-settings/appsettings.prod.json > /usr/share/nginx/html/app-settings/appsettings.json && exec nginx -g 'daemon off;'"]
