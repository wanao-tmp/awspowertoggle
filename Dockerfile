# github.com/gbolo/aws-power-toggle

#
#  BUILD CONTAINERS ------------------------------------------------------------
#

### Building frontend
FROM debian:stable as builder-nodejs

WORKDIR /app
COPY . .

# install requirements for nvm
RUN   set -xe; \
      apt-get update && \
      apt-get install -y --no-install-recommends ca-certificates curl bash git make

# switch to bash shell and install nvm from official script
SHELL ["/bin/bash", "--login", "-c"]
RUN   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash

# install the correct nodejs version via nvm, then build the frontend
RUN   nvm install && make frontend \
      sudo apt-get update -qq \
      sudo apt-get install -y --no-install-recommends build-essential make

### Building backend
FROM golang:1.14-alpine as builder-golang

WORKDIR /go/src/app
COPY . .

RUN   set -xe; \
      mkdir -p /tmp/build && \
      apk add --no-cache git make && \
      make backend && \
      cp testdata/sampleconfig/power-toggle-config.yaml bin/aws-power-toggle-master-modif /tmp/build/

#
#  FINAL BASE CONTAINER --------------------------------------------------------
#

FROM  gbolo/baseos:alpine

# prepare env vars
ENV   POWER_TOGGLE_SERVER_STATIC_FILES_DIR /opt/aws-pt/frontend

# prepare homedir
RUN   mkdir -p /opt/aws-pt

# Copy in from builders
COPY  --from=builder-golang /tmp/build/ /opt/aws-pt/
COPY  --from=builder-nodejs /app/frontend/dist /opt/aws-pt/frontend
