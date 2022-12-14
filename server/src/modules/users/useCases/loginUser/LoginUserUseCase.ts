import { inject, injectable } from "tsyringe";
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  token: string,
  user: {
    email: string,
    name: string,
    enrollment: string,
    isVerified: boolean,
  }
}

@injectable()
class LoginUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findUser(email)

    if (!user) {
      throw new AppError("Invalid credentials")
    }

    // Talvez seja melhor tratar isso no front
    // if (!user.isVerified) {
    //   throw new AppError("Verify your account to continue")
    // }

    const passwordMatches = await bcrypt.compare(password, user.password)

    if (!passwordMatches) {
      throw new AppError("Invalid credentials")
    }


    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "fake jwt secret for testing", {
      expiresIn: '1d'
    })

    const filteredUserData = {
      id: user.id,
      email: user.email,
      name: user.name,
      enrollment: user.enrollment,
      isVerified: user.isVerified
    }

    return { token, user: filteredUserData }
  }
}

export { LoginUserUseCase }