exports.Query = {
  hello: () => {
    return "world";
  },
  products: (parent, args, { products }) => {
    return products;
  },

  product: (parent, args, { products }) => {
    const prodID = args.id;
    const product = products.find((product) => {
      return product.id === prodID;
    });
    if (!product) {
      return null;
    } else {
      return product;
    }
  },

  categories: (parent, args, { categories }) => {
    return categories;
  },
  category: (parent, args, { categories }) => {
    const categoryID = args.id;
    console.log(categoryID);
    return categories.find((category) => category.id === categoryID);
  },
};
