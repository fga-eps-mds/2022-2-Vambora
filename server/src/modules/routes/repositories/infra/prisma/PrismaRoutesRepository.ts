import { ICreateRouteDTO } from "@modules/routes/dtos/ICreateRouteDTO";
import { Route } from "@prisma/client";
import { IRoutesRepository } from "../../IRoutesRepository";
import { prisma } from "prisma";

class PrismaRoutesRepository implements IRoutesRepository {
  async create(data: ICreateRouteDTO): Promise<Route> {
    const { description, distance, duration, name, destination, origin, userId } = data

    const route = await prisma.route.create({
      data: {
        description,
        distance,
        duration,
        name,
        destination,
        origin,
        createdBy: userId,
      }
    })

    return route
  }
}

export { PrismaRoutesRepository }