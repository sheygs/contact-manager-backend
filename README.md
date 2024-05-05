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
PORT=3000
NODE_ENV=development
PG_PASSWORD=****
PG_PORT=5432
PG_HOST=postgres
PG_USER=postgres
PG_DATABASE=****
JWT_SECRET=****
JWT_EXPIRES_IN=*d
JWT_COOKIE_EXPIRES_IN=*
```

### Installation 📦

```bash
   $ git clone https://github.com/sheygs/hux-assessment-backend.git
   $ cd hux-assessment-backend
   $ yarn
```

#### Using Docker

- Run `docker-compose up -d`.
- Open browser and visit `http://localhost:3001`

#### Without Docker

- Run `yarn start:dev` to run the services and you are good
- Open browser and visit `http://localhost:3001`

### Test

```bash
   $ npm test
```

### Postman Documentation

- Please see `/postman_docs` directory on the root OR
- Navigate to `http://localhost:3001/api-docs` on your computer to view the openapi documentation.

#### Improvement Points

- Implement Caching for frequently accessed data
- Implement Pagination for large data sets
