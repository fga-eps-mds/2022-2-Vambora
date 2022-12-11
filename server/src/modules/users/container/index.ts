import { container } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { PrismaUsersRepository } from "../repositories/infra/prisma/PrismaUsersRepository";

container.registerSingleton<IUsersRepository>("UsersRepository", PrismaUsersRepository);
