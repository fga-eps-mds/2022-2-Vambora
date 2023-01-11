import { Route } from "@prisma/client";
import { ICreateRouteDTO } from "../dtos/ICreateRouteDTO";

export interface IRoutesRepository {
  create(data: ICreateRouteDTO): Promise<Route>;
}