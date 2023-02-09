import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/User';

const secret = process.env.JWT_SECRET || 'secret';

export default function createToken(payload: IUser) {
  const config: SignOptions = {
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, secret, config);
  return token;
}