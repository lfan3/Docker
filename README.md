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
- if we want to use the command docker, we need to associer notre terminal avec the terminal of virtual machine
> eval $(docker-machine env default)
- docker-machine stop default
- docker-machine start default
- docker-machine restart default (ip may be changed, need to re-run docker-machine env)
### docker
- docker run hello-world (docker run to run a container)
  - first time run hello-world image: Docker client contacts Docker Daemon
  - then Docker Doemon pulled the "hello-world" image from  the Docker Hub
  - Docker Daemon created a new container from that image which runs the executable that produces the output
  - Docker Daemon streamed that output to the Docker client, which sent it to my terminal
  #### docker run
  - Docker runs processes in isolated containers. 
  - docker run -d, --detach                         Run container in background and print container ID
  - docker run -p, --publish list                   Publish a container's port(s) to the host
  - docker run --name "pieceful" -d -p 8000:80 nginx
  - curl $(docker-machine ip Char):8000
  #### docker start
  #### docker stop
  - Docker stop pieceful
  #### docker rm
  - the container need firstly be stopped then be removed
  #### docker exec 
  > docker exec -it <container> bash
### others





# extra
-tape zsh to change another terminal


