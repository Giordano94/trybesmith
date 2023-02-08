import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  async insertProducts(req: Request, res: Response) {
    const { name, amount } = req.body;
    const newProduct = await this.productService.insertProduct(name, amount);
    res.status(201).json(newProduct);
  }

  async getAllProducts(_req: Request, res: Response) {
    const allProducts = await this.productService.getAllProducts();
    res.status(200).json(allProducts);
  }
}