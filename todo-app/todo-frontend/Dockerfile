FROM node:24 AS build-stage

WORKDIR /usr/src/app

COPY . .

ENV VITE_BACKEND_URL=http://localhost:3000

RUN npm ci

# Test stage
FROM build-stage AS test

RUN npm test

# Build stage
FROM build-stage AS build

# Copy the tested application so this stage depends on the test stage
COPY --from=test /usr/src/app .

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-n", "dist"]