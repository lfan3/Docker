FROM ruby:2.5.1

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install nodejs -y
RUN gem install rails

RUN mkdir -p /opt/app
WORKDIR /opt/app 
#ONBUILD COPY app /opt/app
#ONBUILD WORKDIR /opt/app

ONBUILD ADD app /opt/app
ONBUILD RUN bundle install
ONBUILD RUN rails db:setup
ONBUILD RUN rails db:seed

#docker build -t ft-rails:on-build .
#docker run -it --rm ft-rain:on-build
