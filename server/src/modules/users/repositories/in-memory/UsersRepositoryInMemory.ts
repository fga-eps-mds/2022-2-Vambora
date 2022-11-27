import { User } from "@prisma/client";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {

  private usersRepository: User[] = [];

  async create(data: ICreateUserDTO): Promise<User> {
    const { name, email, enrollment, password } = data

    const user: User = Object.assign({
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      enrollment,
      password,
      verificationCode: Math.floor(Math.random() * 100000),
    })

    this.usersRepository.push(user);

    return user;
  }

  async findUser(email: string): Promise<User | null> {
    return this.usersRepository.find((user) => user.email === email) || null
  }

  async getVerificationCode(user_id: string): Promise<number | null> {
    return this.usersRepository.find((user) => user.id == user_id)?.verificationCode || null
  }

  async verifyUser(user_id: string): Promise<void> {
    this.usersRepository.forEach((user) => user.id === user_id && (user.isVerified = true))
    return;
  }
}

export { UsersRepositoryInMemory }