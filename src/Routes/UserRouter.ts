import { Router } from 'express';
import UserController from '../controllers/UserController';

const routers = Router();

const userController = new UserController();

routers.post('/', userController.insertUser.bind(userController));

export default routers;