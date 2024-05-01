FROM node:20-alpine as build

WORKDIR /app

# Add package file
COPY package.json yarn.lock tsconfig.json ./

RUN yarn install --frozen-lockfile

# Copy source
COPY . .

# Build dist
RUN yarn transpile


FROM node:20-alpine

RUN apk add --no-cache curl

WORKDIR /app

COPY package.json yarn.lock tsconfig.json ./

RUN yarn install --frozen-lockfile

COPY --from=build /app/build ./build

EXPOSE 80

CMD ["yarn", "start"]
