import { inject, injectable } from "tsyringe";
import { IMailAdapter } from "../../../../adapters/mail-adapter";
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
    const domain = email.split("@")[1]

    if (domain !== 'aluno.unb.br' && domain !== 'unb.br') {
      throw new Error("Cannot create e-mail from outside UnB.")
    }

    const userExists = await this.usersRepository.findUser(email)

    if (userExists) {
      throw new Error("User already exists!")
    }

    await this.usersRepository.create({
      email,
      name,
      enrollment,
      password
    })

    await this.mailAdapter.sendMail({
      subject: "Seja bem-vindo(a) ao Vambora!",
      body: [
        `<body>`,
        `<h1>Teste</h1>`,
        `</body>`,
      ].join("\n"),
      user_email: email
    })
  }
}

export { CreateUserUseCase }