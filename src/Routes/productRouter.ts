import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const routers = Router();

const productController = new ProductController();

routers.get('/', productController.getAllProducts.bind(productController));
routers.post('/', productController.insertProducts.bind(productController));

export default routers;