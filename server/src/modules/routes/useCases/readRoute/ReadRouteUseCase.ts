import { Route, User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { AppError } from '@shared/errors/AppError';
import { IRoutesRepository } from '@modules/routes/repositories/IRoutesRepository';

@injectable()
class ReadRouteUseCase {
  constructor(
    @inject('RoutesRepository')
    private routesRepository: IRoutesRepository
  ) { }
  
}

export { ReadRouteUseCase };
