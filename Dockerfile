FROM nginx
#file author
MAINTAINER tencentcloudccs
ADD ./dist /usr/share/nginx/html
