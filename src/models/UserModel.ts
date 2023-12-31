import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces/User';

export default class UserModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  async insertUser(user: IUser):
  Promise<IUser> {
    const { username, vocation, level, password } = user;
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users(username, vocation, level, password ) VALUES (?, ?, ?, ?)',
      [username, vocation, level, password],
    );

    const newUser : IUser = { id,
      username, 
      vocation,
      level,
      password };

    return newUser;
  }
}  