const { ApolloServer } = require('apollo-server');

require('dotenv').config(); // Load environment variables from .env file
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const db = require('./utils/db'); // Import Sequelize instance

const server = new ApolloServer({
  typeDefs,
  resolvers,
});


server.listen({ port: 3000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
