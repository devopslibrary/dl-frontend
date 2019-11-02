FROM node:12-alpine
ENV YARN_VERSION 1.19.1

# Install Yarn
RUN mkdir /home/node/app && cd /home/node/app && apk add git libpng-dev

COPY . /home/node/app
WORKDIR /home/node/app
RUN rm -Rf /home/node/app/.git && yarn && yarn global add @gridsome/cli

CMD ["/usr/local/bin/yarn", "serve"]
