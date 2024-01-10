const {ApolloServer} = require('@apollo/server');
const {startStandaloneServer} = require('@apollo/server/standalone');
const allTypeDefs = require("./graphql/schemas/index.schema");
const allResolvers = require("./graphql/resolvers/index.resolver");
const {sequelize} = require("./models");

const server = new ApolloServer({
    typeDefs: allTypeDefs,
    resolvers: allResolvers,
    includeStacktraceInErrorResponses: false, //to exclude stackTrace parameter from error messages
    introspection: true,
});
const openApolloServer = async () => {
    const {url} = await startStandaloneServer(server, {
        listen: {port: 5000},
    });
    console.log(`🚀  Server ready at: ${url}`);
};

const checkConnectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
};


openApolloServer();
checkConnectDB();
