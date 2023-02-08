import connection from '../models/connection';
import ProductModel from '../models/porduct.model';

export default class ProductService {
  model : ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  async insertProduct(name: string, amount: string) {
    const newProduct = await this.model.insertProduct(name, amount);
    return newProduct;
  }

  async getAllProducts() {
    const allProducts = await this.model.getAllProducts();
    return allProducts;
  }
}