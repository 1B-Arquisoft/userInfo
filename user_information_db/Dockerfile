# Image from the Docker repo of MYSQL (Expose ports include)
FROM mysql:latest
# Move the script to the directory on the docker where it will be initialized
COPY ./script.sql /docker-entrypoint-initdb.d/
