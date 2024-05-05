import * as bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { config } from '../config';

const {
  APP: { JWT_EXPIRES_IN, JWT_SECRET },
} = config;

export class UtilService {
  private static readonly saltOrRounds = 10;

  static async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.saltOrRounds);
  }

  static async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }

  static signJWT(userID: string, email: string, role: string): string {
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
