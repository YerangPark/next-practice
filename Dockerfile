# Build stage
FROM node:20-alpine AS builder

# 루트 경로에 있는 package.json과 package-lock.json 복사
COPY package.json package-lock.json ./

# 의존성 설치
RUN npm install --legacy-peer-deps

# 소스 코드 복사
COPY . .

# 빌드 수행 (빌드 결과는 루트 경로에 'out' 디렉토리에 생성)
RUN npm run build

# Production stage (최종 실행 단계)
FROM node:20-alpine

# 빌드된 결과물(out)을 그대로 사용 (복사 없이)
COPY --from=builder /out /out

# 필요한 경우에만 package.json과 package-lock.json을 복사
COPY --from=builder /package.json /package.json
COPY --from=builder /package-lock.json /package-lock.json

# Production 모드 의존성만 설치
RUN npm install --only=production

# 애플리케이션 포트를 노출
EXPOSE 3000

# 앱 시작 명령어
CMD ["npm", "start"]