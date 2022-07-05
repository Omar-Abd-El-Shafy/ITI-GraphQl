const { v4: uuid } = require("uuid");
exports.Mutation = {
  addCategory: (_, input, context) => {
    console.log(input)

    return context.dataSources.category.create(input);
  },
  //   addCategory: (parent, { input }, { categories }) => {
  //     const newCategory = {
  //       id: input.id,
  //       name: input.name,
  //     };
  //     categories.push(newCategory);
  //     console.log(categories);
  //     return newCategory;
  //   },
};
