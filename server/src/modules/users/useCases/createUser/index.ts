import { PrismaUsersRepository } from "../../repositories/prisma/PrismaUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const prismaUsersRepository = new PrismaUsersRepository()
const createUserUseCase = new CreateUserUseCase(prismaUsersRepository)
export const createUserController = new CreateUserController(createUserUseCase);