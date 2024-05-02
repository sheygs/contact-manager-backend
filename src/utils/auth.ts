import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config';

const {
  APP: { JWT_EXPIRES_IN, JWT_SECRET },
} = config;

export class UtilService {
  private static readonly saltOrRounds = 10;

  static async hashPassword(password: string) {
    return await bcrypt.hash(password, this.saltOrRounds);
  }

  static async comparePassword(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
  }

  static generateToken(userID: string): string {
    return jwt.sign(
      {
        id: userID,
      },
      JWT_SECRET,
      {
        expiresIn: JWT_EXPIRES_IN,
      },
    );
  }

  static signJWT(userID: string, email: string, role: string) {
    return jwt.sign(
      {
        _id: userID,
        email,
        role,
      },
      JWT_SECRET,
      {
        expiresIn: JWT_EXPIRES_IN,
      },
    );
  }
}
