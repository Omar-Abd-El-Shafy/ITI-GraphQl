const { DataSource } = require("apollo-datasource");
const { Category } = require("../models/category.model");
class CategoryDataSource extends DataSource {
  initialize(config) {
    this.context = config.context;
  }
  create(input) {
    return Category.create(input);
  }
  async list() {
    const categories = await Category.find();
    return categories;
  }
}

module.exports = CategoryDataSource;
