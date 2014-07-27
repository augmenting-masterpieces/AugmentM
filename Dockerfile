# DOCKER-VERSION 0.3.4

FROM    ubuntu:14.04

RUN     apt-get update
RUN     apt-get upgrade -y
RUN     apt-get install -y python-software-properties python g++ make software-properties-common git nasm
RUN     add-apt-repository ppa:chris-lea/node.js
RUN     apt-get update 
RUN     apt-get install -y nodejs

ADD     . /src

RUN     npm install grunt-cli -g

EXPOSE  8080

CMD     ["node", "/src/server.js"]
