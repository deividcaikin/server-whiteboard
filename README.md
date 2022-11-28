# server-whiteboard
Installation:
npm install
Running:
node server.js
Docker images
https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

------------------------
Creating an image and storing it in repository-----
docker build -t dc382/front-whiteboard .
docker images 
Docker run----
docker run -p 3030:3000 dc382/front-whiteboard  
docker run -d -P –name front-whiteboard dc382/front-whiteboard
See all the container running and not -----
docker container ps -a

Server
docker build -t dc382/server-whiteboard .
docker run -p 8888:8080 dc382/server-whiteboard
docker run -d -P –name server-whiteboard dc382/server-whiteboard
Ports
docker port front-whiteboard (could be dc382/front-whiteboard or server-whiteboard)

Github
git clone https://github.com/deividcaikin/server-whiteboard.git
git clone https://github.com/deividcaikin/front-whiteboard.git


