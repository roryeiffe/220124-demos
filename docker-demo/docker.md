# Docker

[Reference for all things Docker](https://docs.docker.com/)

## Containers

A container is a mechanism for packaging an application(or limited number of processes) with its dependencies so that it runs in its own isolated sandbox.

Containerization helps to ensure the application or set of processes can run reliably regardless of the host environment. The container shouldn't be able to modify or interact with it anything it doesn't need and, on the whole, changes in the container should not effect the Host or other containers (and vice versa).


## Some important Definitions:

1. Image - an immutable file that contains the source code, libraries, and everyting else an application needs to run. 
2. Container - a virutalized run-time environment that is isolated from the host system as well as other containers
3. Dockerfile - includes the commands used to assemble an image


## Docker Architecture

Taken from [https://docs.docker.com/get-started/overview/](here). We see from the diagram that the client communicates with the Docker daemon which then performs the building, running, and distributing of the Docker containers. 

![Docker Architecture](architectue.png)

## Containers vs Virtual Machines (VMs)

Containers are much more ligthweight than VMs. They are built on top of the host operating system's kernel. They only contain Apps and Services. 

![Container Architecture](container.png)

Virtual Machines run a complete operating system, including its own kernel.
![Virtual Machine Architecture](vm.png)


