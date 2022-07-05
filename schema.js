const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    hello: String
    products: [Product!]
    product(id: ID!): Product
    categories: [Category]
    category(id: ID!): Category
  }

  type Mutation {
    addCategory(input: addCategoryInput): Category!

    # addProduct(input: addProductInput): Product!
  }
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    image: String!
    price: Float!
    onSale: Boolean!
  }

  type Category {
    id: ID!
    name: String!
    products: [Product]
  }

  input addCategoryInput {

    name: String!
  }
  input addProductInput{
    id: ID!
    name: String!

  }
`;
