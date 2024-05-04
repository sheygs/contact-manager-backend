import { Request } from 'express';
import { BadRequestException, ConflictException, UtilService } from '../utils';
import { User } from '../entities';
import UniversalModel from '../model';

class AuthService {
  static async register(request: { username: string; email: string; password: string }) {
    const { username, email, password } = request;

    try {
      const existingUser = await new UniversalModel(User).findOne({ where: { email } });

      if (existingUser) {
        throw new ConflictException('An account with this email already exists');
      }

      const hashed = await UtilService.hashPassword(password);

      const user = await new UniversalModel(User).insert({
        username,
        email,
        password: hashed,
      });

      delete user.password;

      return { user };
    } catch (error) {
      throw error;
    }
  }
  static async login(request: { email: string; password: string }) {
    const { email, password } = request;

    try {
      const user = await new UniversalModel(User).findOne({
        where: { email },
      });

      if (!user) {
        throw new BadRequestException('Invalid email account');
      }

      const isValidPassword = await UtilService.comparePassword(password, user.password);

      if (!isValidPassword) {
        throw new BadRequestException('Invalid password credential');
      }

      delete user.password;

      const token = UtilService.signJWT(user.id, user.email, user.role);

      return { user, token };
    } catch (error) {
      throw error;
    }
  }
  static async userLoggedIn(req: Request) {
    try {
      const user = await new UniversalModel(User).findOne({
        where: { id: req.user },
      });

      delete user.password;

      return user;
    } catch (error) {
      throw error;
    }
  }
}

export { AuthService };
