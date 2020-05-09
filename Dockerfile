FROM node as builder
WORKDIR /app
COPY . /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install --silent
RUN npm install react-scripts -g --silent 
RUN npm run build 

FROM httpd 
COPY .htaccess /usr/local/apache2/htdocs/
COPY httpd.conf /usr/local/apache2/conf/
#RUN sed -i "/\<Directory.*htdocs\>/r /usr/local/apache2/add.txt" /usr/local/apache2/conf/httpd.conf
RUN sed -i '/LoadModule rewrite_module/s/^#//g' /usr/local/apache2/conf/httpd.conf

RUN { \
  echo 'IncludeOptional conf.d/*.conf'; \
} >> /usr/local/apache2/conf/httpd.conf \
  && mkdir /usr/local/apache2/conf.d


COPY --from=builder /app/build /usr/local/apache2/htdocs/
