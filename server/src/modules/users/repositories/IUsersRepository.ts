import { User } from "@prisma/client";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  findUser(email: string): Promise<User | null>;
  getVerificationCode(user_id: string): Promise<number | null>;
  verifyUser(user_id: string): Promise<void>;
}