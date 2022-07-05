exports.Category = {
  products: (parent, args, { products }) => {
    return products.filter((product) => {
      return product.categoryId === parent.id;
    });
  },
};
