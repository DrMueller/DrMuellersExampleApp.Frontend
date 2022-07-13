FROM nginx

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

COPY ./DockerContent /usr/share/nginx/html/ea
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
