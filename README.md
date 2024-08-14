# Create a Basic Node.JS GraphQL api using Apollo and connect to a Postgres DB using Sequelize

This purpose of this project is to create a basic sample Node GraphQL Endpoint that I could containerize in Docker as well as to gain some experience with additional popular Node libraries. The application is a basic CRUD end point that contains first and last names.

* **Apollo Server** - An open-source GraphQL server that allows to quickly set up a GraphQL endpoint and is self-documenting. I choose this for the ease of use and it provides a Swagger UI.
* **Sequelize** - A modern TypeScript/Node ORM. I choose this to gain more experience with ORMs and it is compatible with Postgres which is currently a very popular open source RDS.
* **Docker** - A popular containerization application. I choose this to gain more experience with developing services that have a smaller footprint, scalable, and conform to CI/CD practices. 


## Run Locally via Docker Desktop

### Pre-requirements
* [node](https://nodejs.org/en/download/package-manager) (Node - Optionally there are other Node Version Manager tools to install different versions. See npm link below for various options for different Operating Systems) *This project uses 14.17.0
* [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (Node package manager)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Used to set up a local PostgreSQL DB if missing and containerize server app)

Download or clone repo `git clone https://github.com/icaninspireme/BasicPostgresNodeGraphqlDocker`

Install required packages by running command `npm install`:

    * apollo-server: used for GraphQL server 
    * dotenv: used for environment configuration
    * graphql: used to build type schema and serving queries against that schema. Required for apollo-server.
    * pg: used for PostgreSQL client. Required by sequelize for Postgres.
    * sequelize: used for ORM/Database connection


Application can compile locally via `node server.js` but will not be able to connect to the postgres server.

Run `docker compose up` to build, start, and attach containers for the service.

Service should boot up and a swagger interface available at `http://localhost:3000/`