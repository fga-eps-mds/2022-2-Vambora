import { User } from '@prisma/client';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findUser(email: string): Promise<User | null>;
  findUserById(user_id: string): Promise<User | null>;
  getVerificationCode(user_id: string): Promise<number | null>;
  verifyUser(user_id: string): Promise<void>;
  updateUser(user_id: string, email: string, name: string, enrollment: string): Promise<User>;
}
