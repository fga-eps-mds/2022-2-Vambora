import { User } from "@prisma/client";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  private usersRepository: User[] = [];

  async create(data: ICreateUserDTO): Promise<void> {
    const { name, email, enrollment, password } = data

    const user: User = Object.assign({
      name,
      email,
      enrollment,
      password
    })

    this.usersRepository.push(user);
  }

  async findUser(email: string): Promise<User | null> {
    return this.usersRepository.find((user) => user.email === email) || null
  }
}

export { UsersRepositoryInMemory }