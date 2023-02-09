import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  constructor(private userService = new UserService()) {}

  async insertUser(req: Request, res: Response) {
    const userBody = req.body;
    const newUser = await this.userService.insertUser(userBody);
    res.status(201).json(newUser);
  }
}