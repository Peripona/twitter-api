FROM mhart/alpine-node:latest
COPY index.js twitter.js config.js package.json package-lock.json ./
RUN npm i
CMD ["node", "index"]