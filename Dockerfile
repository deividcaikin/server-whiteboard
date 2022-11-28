FROM node
# alpine:3.14
# Create app directory
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
WORKDIR /usr/src/app
COPY package*.json ./
#COPY node_modules/ ./
# RUN npm install
RUN npm ci --only=production
# If you are building your code for production
#RUN npm ci --only=production
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]