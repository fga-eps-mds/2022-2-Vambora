import { IRoutesRepository } from "@modules/routes/repositories/IRoutesRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

interface IRequest {
  userId: string,
  name: string,
  description: string,
  distance: number,
  duration: number,
  origin: string[],
  destination: string[],
}

@injectable()
class CreateRouteUseCase {
  constructor(
    @inject("RoutesRepository")
    private routesRepository: IRoutesRepository,
  ) { }
  async execute({ userId, name, description, distance, duration, origin, destination }: IRequest) {
    if (!name || !distance || !duration || !origin || !destination) {
      throw new AppError("Missing parameters")
    }

    const route = await this.routesRepository.create({
      userId,
      name,
      description,
      distance,
      duration,
      origin,
      destination
    })

    return route
  }
}

export { CreateRouteUseCase }