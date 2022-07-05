const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
mongoose
  .connect(
    `mongodb+srv://${process.env.mongoUserName}:${process.env.mongoUserPassword}@amazon-clone.ob6xs.mongodb.net/?retryWrites=true&w=majority`
  )

  .then(() => {
    console.log("MongoDB connected successfully");
  });

const { typeDefs } = require("./schema");
const CategoryDataSource = require("./datasource/category.datasource");

const { categories, products } = require("./db");
const { Mutation } = require("./resolvers/Mutation");
const { Query } = require("./resolvers/Query");
const { Category } = require("./resolvers/Category");

//categories

//schema

//resolvers

const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Category, Mutation },
  dataSources: () => ({
    category: new CategoryDataSource(),
  }),
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
