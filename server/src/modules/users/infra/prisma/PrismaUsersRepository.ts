import { User } from "@prisma/client";
import { prisma } from "../../../../prisma";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

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

  async findUser(email: string): Promise<User | null> {
    const userExists = await prisma.user.findFirst({
      where: {
        email
      }
    })

    return userExists
  }
}

export { PrismaUsersRepository }