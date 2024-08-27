# Node.js의 경량 버전을 베이스 이미지로 사용합니다.
FROM node:20-alpine

# Apache와 필요한 패키지 설치
RUN apk --no-cache add apache2

# 앱 디렉토리를 생성하고, 작업 디렉토리로 설정합니다.
WORKDIR /app

# package.json과 package-lock.json을 복사합니다.
COPY package.json package-lock.json ./

# 의존성을 설치합니다.
RUN npm install --legacy-peer-deps

# 소스 코드를 모두 복사합니다.
COPY . .

# 빌드를 수행합니다.
RUN npm run build

# 빌드된 정적 파일을 Apache의 서브 디렉토리로 복사합니다.
RUN cp -r .next/* /var/www/html/

# Apache를 시작할 때 사용할 스크립트를 설정합니다.
COPY start-apache /usr/local/bin/start-apache
RUN chmod +x /usr/local/bin/start-apache

# 애플리케이션 포트를 노출합니다.
EXPOSE 80

# Apache를 시작하는 명령어입니다.
CMD ["start-apache"]