FROM node:14-bullseye
RUN mkdir -p /code
WORKDIR /code
ADD . /code
RUN apt install git -y
RUN yarn install
RUN yarn build
RUN rm -rf /code/node_modules
CMD [ "yarn", "start" ]
EXPOSE 3000
