import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  verificationCode: string;
  user_id: string;
}

@injectable()
class VerifyUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }
  async execute({ verificationCode, user_id }: IRequest) {
    const userVerificationCode = await this.usersRepository.getVerificationCode(user_id);

    if (!userVerificationCode) {
      throw new AppError("User not found");
    }

    if (userVerificationCode === parseInt(verificationCode)) {
      await this.usersRepository.verifyUser(user_id)
    } else {
      throw new AppError("Code doesn't match")
    }
  }
}

export { VerifyUserUseCase }