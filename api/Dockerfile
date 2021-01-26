FROM node:alpine
WORKDIR /mnt
COPY . .
RUN npm i && npm run build
CMD ["node", "./dist/index.js"]