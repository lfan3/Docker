FROM debian

MAINTAINER linfan <linfan@student.42.fr>

ENV TS3SERVER_LICENSE=accept

WORKDIR /home/teamspeak

#virtual voice server on 9987/udp
#the ServerQuery on port 10011/tcp
#file transfer on 30033/tcp

EXPOSE 9987/udp 10011 30033

RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y wget bzip2 && \
    wget http://dl.4players.de/ts/releases/3.0.13.4/teamspeak3-server_linux_amd64-3.0.13.4.tar.bz2 && \
    tar -xvf teamspeak3-server_linux_amd64-3.0.13.4.tar.bz2

WORKDIR teamspeak3-server_linux_amd64

ENTRYPOINT sh ts3server_minimal_runscript.sh

#docker build -t ex01 .
#docker run --rm -p 9987:9987/upd -p=10011:10011 -p=30033:30033 ex01
