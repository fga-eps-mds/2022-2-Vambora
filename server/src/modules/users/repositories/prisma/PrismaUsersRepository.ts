import { prisma } from "../../../../prisma";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";

class PrismaUsersRepository implements IUsersRepository {
  async create(data: ICreateUserDTO): Promise<void> {
    const { email, name, enrollment, password } = data

    await prisma.user.create({
      data: {
        email,
        name,
        enrollment,
        password
      }
    })
  }
}

export { PrismaUsersRepository }