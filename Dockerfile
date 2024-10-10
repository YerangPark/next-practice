# Build stage
FROM node:20-alpine AS builder

# 앱 디렉토리 생성 및 설정
WORKDIR /app

# 루트 경로에 있는 package.json과 package-lock.json 복사
COPY ./package.json ./package-lock.json ./

# 의존성 설치
RUN npm install --legacy-peer-deps

# 소스 코드 복사
COPY . .

# 빌드 수행
RUN npm run build

# Production stage (최종 실행 단계)
FROM node:20-alpine

# 앱 디렉토리 생성 및 설정
WORKDIR /app

ENV NEXT_PUBLIC_API_BASE_URL=http://yrpark.duckdns.org:8080

# 빌드된 결과물(.next)을 최종 컨테이너에 복사
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/package-lock.json ./package-lock.json

# Production 모드 의존성만 설치
RUN npm install --only=production

# 애플리케이션 포트를 노출
EXPOSE 3000

# 앱 시작 명령어
CMD ["npm", "start"]