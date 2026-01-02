FROM node:20-alpine AS builder
WORKDIR /app
ARG REACT_APP_API_URL
ARG REACT_APP_ADMIN_KEY
ENV REACT_APP_API_URL=$REACT_APP_API_URL
ENV REACT_APP_ADMIN_KEY=$REACT_APP_ADMIN_KEY
COPY package.json ./
RUN npm install
COPY public ./public
COPY src ./src
COPY tsconfig.json ./
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/build ./build
RUN npm install -g serve
EXPOSE 3010
CMD ["serve", "-s", "build", "-l", "3010"]
