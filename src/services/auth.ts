import { BadRequestException, ConflictException, UtilService } from '../utils';
import { User } from '../entities';
import UniversalModel from '../model';

class AuthService {
  static async register(request: { email: string; password: string }) {
    const { email, password } = request;

    try {
      const existingUser = await new UniversalModel(User).findOne({ where: { email } });

      if (existingUser) {
        throw new ConflictException('An account with this email already exists');
      }

      const hashed = await UtilService.hashPassword(password);

      const user = await new UniversalModel(User).insert({ email, password: hashed });

      const token = UtilService.generateToken(user.id);

      delete user.password;

      return { user, token };
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
        throw new BadRequestException('Invalid login credentials');
      }

      const isValidPassword = UtilService.comparePassword(password, user.password);

      if (!isValidPassword) {
        throw new BadRequestException('Invalid login credentials');
      }

      delete user.password;

      const token = UtilService.signJWT(user.id, user.email, user.role);

      return { user, token };
    } catch (error) {
      throw error;
    }
  }
  static async logOut() {
    try {
    } catch (error) {
      throw error;
    }
  }
}

export { AuthService };
