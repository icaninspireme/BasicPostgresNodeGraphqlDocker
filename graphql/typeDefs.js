const { gql } = require('apollo-server');

const typeDefs = gql`
    type Account {
        id: ID!
        firstName: String!
        lastName: String!
    }
    type Query {
        getAccount(id: ID!): Account
        getAllAccounts: [Account]
    }
    type Mutation {
        createAccount(firstName: String!, lastName: String!): Account
        updateAccount(id: ID!, firstName: String!, lastName: String!): Account
        deleteAccount(id: ID!): Account
    }
`;

module.exports = typeDefs;