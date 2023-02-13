import { Router } from 'express';
import OrderController from '../controllers/OrdersController';

const routers = Router();

const orderController = new OrderController();

routers.get('/', (req, res) => orderController.getAllOrders(req, res));

export default routers;