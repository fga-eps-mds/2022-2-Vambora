import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class UpdateUserUseCase {
  constructor(@inject("UsersRepository")
  private usersRepository: IUsersRepository) { }

  async execute(user_id: string, name: string, email: string, password: string): Promise<User | null> {
    const user = await this.usersRepository.findUserById(user_id)

    if (!user) {
      throw new AppError("Invalid user")
    }

    const updatedUser = await this.usersRepository.updateUser(user_id, name, email, password)

    return updatedUser;
  }
}


export { UpdateUserUseCase }