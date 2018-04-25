FROM node:alpine

COPY --chown=node:node . /home/node/app

USER node

WORKDIR /home/node/app

RUN yarn --production

CMD [ "/usr/local/bin/node", "/home/node/app/app.js" ]