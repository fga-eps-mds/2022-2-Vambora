import { Request, Response } from "express";
import { AppError } from "@shared/errors/AppError";
import { CreateRouteUseCase } from "./CreateRouteUseCase";

class CreateRouteController {
  async handle(req: Request, res: Response) {
    const { name, description, distance, duration, origin, destination } = req.body
    
  
    //const createRouteUseCase = container.resolve(CreateRouteUseCase)
  
  }
}

export { CreateRouteController }