# Demo

## Install Docker

Make sure to create a back-up of you system beforehand, just in case. 

Follow the instructions on (this page)[https://docs.docker.com/get-docker/]

## Your first container

Open up GitBash and type out 
```
docker run -d -p 80:80 docker/getting-started
```

Navigate to Docker Desktop and we should see the container on our list of containers. To see what's happening, hover over the container and click on "Open in Browser". You should be able to see a page that looks like this:

![Tutorial Page](tutorial_page.png)

## Building a Container

1. A container is pretty useless if don't have any code to run, so let's download the (app)[https://github.com/docker/getting-started/tree/master/app]. 

2. Create a file named "Dockerfile" in the directory with the "package.json" file. Make sure there are no file extensions (.txt, .md, etc.). It should just be "Dockerfile"). 

```
# syntax=docker/dockerfile:1
FROM node:12-alpine
RUN apk add --no-cache python2 g++ make
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
```

Even if we don't have Node on our machine, the image will be downloaded so we can still run the app.

3. Open a bash terminal in the same directory as the newly created Dockerfile and run ```docker build -t getting-started .``` We can replace "getting-started" with anything, this is just the name of the container, as flagged by "-t". 

4. We can start the container with 
```
docker run -dp 3000:3000 getting-started
```
in the terminal. 

5. Navigate to http://localhost:3000 and you should be able to interact with the website, with no need to install any of the required technologies manually!