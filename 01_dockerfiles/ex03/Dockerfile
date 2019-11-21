FROM debian:10.1

MAINTAINER linfan <linfan@student.42.fr>

ENV TERM xterm

RUN apt-get update && \
    apt-get install -y  wget openssh-server ca-certificates postfix


RUN wget https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh 

RUN bash script.deb.sh && EXTERNAL_URL="http://192.168.99.100:8080" && apt-get install -y gitlab-ce

RUN apt update && apt install -y tzdata && \
  apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN sed -i "s/# grafana\['enable'\] = true/grafana['enable'] = false/g" /etc/gitlab/gitlab.rb && \
    sed -i "s/# prometheus_monitoring\['enable'\] = true/prometheus_monitoring\['enable'\] = false/g" /etc/gitlab/gitlab.rb && \
    sed -i "s/# unicorn\['worker_timeout'\] = 60/unicorn\['worker_timeout'\] = 300/g" /etc/gitlab/gitlab.rb

EXPOSE 22 80 443

ENTRYPOINT (/opt/gitlab/embedded/bin/runsvdir-start &) && gitlab-ctl reconfigure && service ssh start && tail -f /dev/null

#docker build -t gitlab5 . 
#docker run --name gitlab5 -itd --shm-size=4g --rm -p 8080:80 -p 8443:443 -p 8022:22 --privileged gitlab5 && docker attach gitlab5
#git clone ssh://git@gitlab.myurl.com:2222/repo
