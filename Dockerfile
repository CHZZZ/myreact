FROM node:8.9.4

ADD . /app/

WORKDIR /app

#RUN npm install
#RUN npm rebuild node-sass --force

ENV PORT 80

EXPOSE 80
 
CMD ["npm", "start"]
