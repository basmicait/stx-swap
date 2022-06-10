FROM node:14-bullseye
RUN mkdir -p /code
WORKDIR /code
ADD . /code
#COPY git.key /root/.ssh/git.key
RUN apt install git -y
#RUN mkdir -p /root/.ssh &&\
#    touch /root/.ssh/config &&\
#    echo "Host *" > /root/.ssh/config &&\
#    echo "IdentityFile /root/.ssh/git.key" > /root/.ssh/config &&\
#    chmod 700 /root/.ssh &&\
#    chmod 644 /root/.ssh/config
#RUN apk add git && \
#    apk add --no-cache openssh-client
#RUN npm cache clean --force && \
#    npm install -g npm && \
#    npm update && \
#    npm install
RUN npm install
RUN yarn install
RUN yarn build
#RUN rm /root/.ssh/config &&\
#    rm /root/.ssh/git.key
CMD [ "yarn", "start" ]
#CMD ["/bin/bash"]
EXPOSE 3000
