# Node.js의 경량 버전을 베이스 이미지로 사용합니다.
FROM node:20-alpine

# 앱 디렉토리를 생성하고, 작업 디렉토리로 설정합니다.
WORKDIR /app

# package.json과 package-lock.json을 복사합니다.
COPY package.json package-lock.json ./

# 의존성을 설치합니다. --legacy-peer-deps 옵션은 필요시 사용할 수 있습니다.
RUN npm install --legacy-peer-deps

# 소스 코드를 모두 복사합니다.
COPY . .

# 빌드를 수행합니다.
RUN npm run build

# 애플리케이션 포트를 노출합니다.
EXPOSE 3000

# 앱을 시작하는 명령어입니다.
CMD ["npm", "start"]
