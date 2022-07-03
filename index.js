const { ApolloServer, gql } = require("apollo-server");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  type Book {
    id: String
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }

  type Mutation {
    createBook(title: String, text: String): Book # The : indicate the return type of thsi function
    updateBook(id: String, title: String, text: String): String
    deleteBook(id: String): String
  }
`;

const books = [
  {
    id: 1,
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    id: 2,
    title: "City of Glass",
    author: "Paul Auster",
  },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    /**Create book Function */
    createbook: (_, { title, author }) => {
      let newbook = {
        id: Math.floor(Math.random() * 100 + 1).toString(),
        title: title,
        author: author,
      };
      books.push(newbook);
      return newbook;
    },
    /**Update book Function */
    updatebook: (_, { id, title, author }) => {
      let bookToBeUpdatedIndex = books.findIndex((book) => book.id === id);
      let booksUpdates = { id: id, title: title, author: author };
      if (bookToBeUpdatedIndex === -1) {
        return "There is no book available to update";
      }
      books[bookToBeUpdatedIndex] = booksUpdates;
      return "Update Successfully";
    },
    /**Delete book Function */
    deletebook: (_, { id }) => {
      let booksAfterDeleteing = books.filter((book) => book.id !== id);
      let bookToBeDeletedIndex = books.findIndex((book) => book.id === id);
      if (bookToBeDeletedIndex === -1) {
        return "There is no book available to delete";
      }
      books = booksAfterDeleteing;
      return "Deleted Successfully";
    },
    /**Add comment to certain book */

  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
