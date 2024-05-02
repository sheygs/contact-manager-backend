## hux-assessment-backend

> API service that allows authenticated users to save contact information


### Features



### Tech Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/download/current)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Jest](https://www.npmjs.com/package/jest)

### Requirements

- [Docker](https://www.docker.com/)
- [Postman](https://www.postman.com/downloads/)
- [Git](https://git-scm.com/downloads)

### Rename _.env.sample_ to _.env_ and populate the placeholders

```bash
PORT=XX
NODE_ENV=development
```

### Postman Documentation

- Navigate to `http://localhost:8282/api-docs` on your computer to view the openapi documentation.

### Installation 📦

#### Without Docker

```bash
   $ git clone https://github.com/sheygs/hux-assessment-backend.git
   $ cd hux-assessment-backend
   $ yarn
```

- Run `yarn` to install project dependencies
- Run `yarn dev` to run the services and you are good
- Open browser and visit `http://localhost:80`

#### Using Docker

- Install [Docker](https://www.docker.com/)
- Run `docker-compose up -d`.
- Open browser and visit `http://localhost:80`

### Production Packaging

- RUN `yarn start` to start the production build

```
docker build -t ${IMAGETAG} -f Dockerfile .
```

### Test

```bash
   $ npm test
```
