import { container } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { PrismaUsersRepository } from "../infra/prisma/PrismaUsersRepository";
import { IMailAdapter } from "../../../adapters/mail-adapter";
import { NodemailerMailAdapter } from "../../../adapters/nodemailer/nodemailer-mail-adapter";

container.registerSingleton<IUsersRepository>("UsersRepository", PrismaUsersRepository);

container.registerSingleton<IMailAdapter>("MailAdapter", NodemailerMailAdapter)