FROM node:20-alpine3.19 as build

WORKDIR /app

# Add package file
COPY package.json yarn.lock tsconfig.json ./

RUN yarn install --frozen-lockfile

# Copy source
COPY . .

# Build dist
RUN yarn transpile


FROM node:20-alpine3.19


RUN apk add --no-cache curl

WORKDIR /app

COPY package.json yarn.lock tsconfig.json ./

RUN yarn install --frozen-lockfile

COPY --from=build /app/build ./build

EXPOSE 3000

CMD ["yarn", "start"]
