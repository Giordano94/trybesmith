import { IUser } from '../interfaces/User';
import connection from '../models/connection';
import UserModel from '../models/UserModel';
import createToken from '../Utils/JWT';

export default class UserService {
  model : UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  async insertUser(user: IUser) {
    const newUser = await this.model.insertUser(user);
    const token = createToken(newUser);
    return { token };
  }
}  