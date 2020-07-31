#!/bin/bash

build_web() {
    docker build -t [TAG_NAME] -f web.Dockerfile .
}

build_images() {
    build_web
}

ship_web() {
    docker tag [tag]:latest [ECR_LOCATION]/[tag]:latest && \
    docker push [ECR_LOCATION]/[tag]:latest
}
ship_images() {
    ship_web
}

# Login to aws
# $(aws ecr get-login --no-include-email --region us-east-2 --profile $AWS_PROFILE)

# Build and ship images
. ./.env && \
build_images && \
ship_images
