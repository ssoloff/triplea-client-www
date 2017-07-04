# Docker

This folder provides Dockerfiles for building various TripleA web client images.

## dev.df

Dockerfile for building a web client image based on the local development environment.

### Build

Build the image using the following command (run from the root of your Git repository):

```
$ docker build --tag triplea/client-www:latest -f tools/docker/dev.df .
```

### Run

Start a new container using the following command:

```
$ docker run -d --name=triplea-client-www -p 3000:3000 triplea/client-www
```
