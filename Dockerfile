#### Stage 1: Build the react application
FROM node:16  as build-stage

WORKDIR /app
 
COPY package*.json ./

ENTRYPOINT /bin/sh -c npm install

# RUN npm install
 
COPY . .

# RUN npm run build 

ENTRYPOINT /bin/sh -c npm run build 

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
COPY --from=build-stage /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]