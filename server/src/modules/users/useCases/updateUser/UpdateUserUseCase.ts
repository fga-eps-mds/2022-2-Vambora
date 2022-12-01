import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class UpdateUserUseCase {
  constructor(@inject("UsersRepository")
  private usersRepository: IUsersRepository) { }

  async execute(id: string, name: string, email: string, password: string): Promise<User> {
    const user = await this.usersRepository.findUserById(id)

    if (!user) {
      throw new AppError("Invalid user")
    }

    const updatedUser = this.usersRepository.updateUser(id, name, email, password)

    return updatedUser;
  }
}


export { UpdateUserUseCase }