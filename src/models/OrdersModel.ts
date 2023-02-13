import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrders } from '../interfaces/Orders';

export default class OrderModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAllOrders(): Promise<IOrders[]> {
    const [allOrders] = await this.connection.execute<IOrders[] & RowDataPacket[]>(
      `SELECT orders.id, orders.user_id as userId, JSON_ARRAYAGG(products.id) as productsIds
FROM Trybesmith.orders AS orders
INNER JOIN Trybesmith.products AS products
ON orders.id = products.order_id
GROUP BY orders.id;`, 
    );
    return allOrders;
  }
}
