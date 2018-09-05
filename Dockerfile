FROM mhart/alpine-node:latest
COPY index.js .
RUN npm i
CMD ["node", "index"]