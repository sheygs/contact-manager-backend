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

### Rename _.env.sample_ to _.env_ and populate keys

```bash
PORT=XXXX
NODE_ENV=development
PORT=3000
PG_PASSWORD=xxxx
PG_PORT=XXXX
PG_HOST=localhost
PG_DATABASE=XXXX
JWT_SECRET=XXXX
JWT_EXPIRES_IN=xd
JWT_COOKIE_EXPIRES_IN=x
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
- Run `yarn start:dev` to run the services and you are good
- Open browser and visit `http://localhost:3000`

#### Using Docker

- Install [Docker](https://www.docker.com/)
- Run `docker-compose up -d`.
- Open browser and visit `http://localhost:3000`

### Production Packaging

- RUN `yarn start` to start the production build

```
docker build -t ${IMAGETAG} -f Dockerfile .
```

### Test

```bash
   $ npm test
```

### Postman Documentation

- Please see `/postman_docs` directory on the root OR
- Navigate to `http://localhost:3000/api-docs` on your computer to view the openapi documentation.

#### Improvement Points

- Implement Caching for frequently accessed data
- Implement Pagination for large data sets
