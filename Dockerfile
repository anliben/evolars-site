FROM nginx:alpine

# Remove default nginx site and static files
RUN rm /etc/nginx/conf.d/default.conf \
  && rm -rf /usr/share/nginx/html/*

# Railway sets PORT dynamically. The nginx image entrypoint will render
# /etc/nginx/templates/*.template into /etc/nginx/conf.d/*.conf via envsubst.
ENV PORT=8080
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Copy static site files
COPY src/ /usr/share/nginx/html/

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
