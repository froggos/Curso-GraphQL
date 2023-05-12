import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
    schema {
        query: Query
    }

    type Query {
        saludos: String
    }
`;

const resolvers = {
    Query: {
        saludos: () => 'Hola mundo',
    }
}

const server = new ApolloServer({ typeDefs, resolvers });
const info = await startStandaloneServer(server, { listen: { port: 9000 } });
console.log(`Servidor corriendo en ${info.url}`);