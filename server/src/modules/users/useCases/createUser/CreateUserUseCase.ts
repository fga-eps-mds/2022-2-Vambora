import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  email: string,
  name: string,
  enrollment: string,
  password: string,
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: PrismaUsersRepository ) { }
  async execute({ email, name, enrollment, password }: IRequest) {
    this.usersRepository.create({
      email,
      name,
      enrollment,
      password
    })
  }
}

export { CreateUserUseCase }