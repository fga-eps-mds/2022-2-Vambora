import { inject, injectable } from "tsyringe";
import * as brcypt from 'bcryptjs'
import { IMailAdapter } from "../../../../shared/adapters/mail-adapter";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string,
  name: string,
  enrollment: string,
  password: string,
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository,
    @inject("MailAdapter")
    private mailAdapter: IMailAdapter
  ) { }
  async execute({ email, name, enrollment, password }: IRequest) {
    if (!email || !name || !enrollment || !password) {
      throw new AppError("Missing parameters")
    }

    const domain = email.split("@")[1]

    if (domain !== 'aluno.unb.br' && domain !== 'unb.br') {
      throw new AppError("Cannot create e-mail from outside UnB.")
    }

    const userExists = await this.usersRepository.findUser(email)

    if (userExists) {
      throw new AppError("User already exists!")
    }

    const verificationCode = Math.floor(Math.random() * 1000000)

    const hashedPassword = await brcypt.hash(password, 10)

    await this.usersRepository.create({
      email,
      name,
      enrollment,
      password: hashedPassword,
      verificationCode
    })

    await this.mailAdapter.sendMail({
      subject: "Seja bem-vindo(a) ao Vambora!",
      body: [
        `<body>`,
        `<h1>${verificationCode}</h1>`,
        `</body>`,
      ].join("\n"),
      user_email: email
    })
  }
}

export { CreateUserUseCase }