import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";

interface IRequest {
  email: string,
  name: string,
  enrollment: string,
  password: string,
}

class CreateUserUseCase {
  constructor(private usersRepository: PrismaUsersRepository = new PrismaUsersRepository()) { }
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