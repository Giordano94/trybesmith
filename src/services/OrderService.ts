import connection from '../models/connection';
import OrderModel from '../models/OrdersModel';

export default class OrderService {
  model : OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async getAllOrders() {
    const allOrders = await this.model.getAllOrders();
    return allOrders;
  }
}