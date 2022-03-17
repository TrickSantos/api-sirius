FROM node:16.14.0-alpine
WORKDIR /app
COPY ./build /app
RUN yarn install --production
EXPOSE 80
ARG HOST=${HOST}
ARG PORT=${PORT}
ARG NODE_ENV=${NODE_ENV}
ARG APP_KEY=${APP_KEY}
ARG DB_CONNECTION=${DB_CONNECTION}
ARG PG_HOST=${PG_HOST}
ARG PG_PORT=${PG_PORT}
ARG PG_USER=${PG_USER}
ARG PG_PASSWORD=${PG_PASSWORD}
ARG PG_DB_NAME=${PG_DB_NAME}
ARG DRIVE_DISK=${DRIVE_DISK}
ARG S3_ENDPOINT=${S3_ENDPOINT}
ARG S3_REGION=${S3_REGION}
ARG S3_KEY=${S3_KEY}
ARG S3_SECRET=${S3_SECRET}
ARG S3_BUCKET=${S3_BUCKET}
ARG SMTP_HOST=${SMTP_HOST}
ARG SMTP_PORT=${SMTP_PORT}
ARG SMTP_USERNAME=${SMTP_USERNAME}
ARG SMTP_PASSWORD=${SMTP_PASSWORD}
ARG CACHE_VIEWS=${CACHE_VIEWS}
ARG FRONT_END_URL=${FRONT_END_URL}
RUN node ace migration:run --force

CMD ["node", "server.js"]
