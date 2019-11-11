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
- docker run
  - Docker runs processes in isolated containers. 
  - docker run -d, --detach                         Run container in background and print container ID
  - docker run -p, --publish list                   Publish a container's port(s) to the host
  - docker run --name "pieceful" -d -p 8000:80 nginx
  - curl $(docker-machine ip Char):8000
- docker start
- docker stop
  - Docker stop pieceful
- docker rm
  - the container need firstly be stopped then be removed
- docker exec 
  > docker exec -it <container> bash
- docker attach <container> 
  - attach local standard input and output and error streams to a running container
  
### docker swarm-mode
### docker service
### others
RUBY:
docker run -dit debian
docker exec -it id_debian
gem install rails
-apt install ruby-full
sudo apt-get install ruby-dev zlib1g-dev liblzma-dev
rails new blog
apt-get install libsqlite3-dev
rails -s(gem install webpacker)
(bundle install)
apt-get install nodejs
apt install yarn// https://yarnpkg.com/en/docs/install#mac-stable

# error solution
-How to Keep Docker Containers Running
>Docker containers, when run in detached mode (the most common -d option), are designed to shut down immediately after the initial entrypoint command (program that should be run when container is built from image) is no longer running in the foreground. This can cause problems because often servers or services running in Docker containers are run in the background, causing your container to shut down before you want it to.

If you would like to keep your container running in detached mode, you need to run something in the foreground. An easy way to do this is to tail the /dev/null device as the CMD or ENTRYPOINT command of your Docker image.
~~~~
FROM ubuntu:16.04
CMD tail -f /dev/null
~~~~
# extra
-tape zsh to change another terminal


