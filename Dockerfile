# 该镜像是基于 nginx:latest 镜像构建
FROM nginx:alpine

# 将项目根目录下dist文件夹下的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下
COPY dist/ /usr/share/nginx/html/
