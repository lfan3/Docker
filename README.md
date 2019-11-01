# Docker
## installation
- brew42
- brew docker docker-machine
- to create a dossier named docker in goinfre
- to create symbolique link
> ln -s ~/goinfre/docker ~/.docker

## commandes
### docker-machine
- docker-machine create --driver virtualbox default(machine-host name:default)
- docker-machine env default(show default machine env)
- docker-machine ls (list all availables machines)
### docker
- docker run hello-world (docker run to run a container)
  - first time run hello-world image: Docker client contacts Docker Daemon
  - then Docker Doemon pulled the "hello-world" image from  the Docker Hub
  - Docker Daemon created a new container from that image which runs the executable that produces the output
  - Docker Daemon streamed that output to the Docker client, which sent it to my terminal
### others
-connecte the shell to the new machine
> eval "$(docker-machine env <machine_name>)"



# extra
-tape zsh to change another terminal


