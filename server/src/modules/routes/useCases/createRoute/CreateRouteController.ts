import { Request, Response } from "express";
import { CreateRouteUseCase } from "./CreateRouteUseCase";
import { container } from "tsyringe";

class CreateRouteController {
  async handle(req: Request, res: Response) {
    const { name, description, distance, duration, origin, destination } = req.body
    const user = req.user

    const createRouteUseCase = container.resolve(CreateRouteUseCase)
    const route = await createRouteUseCase.execute({ userId: ((user as unknown) as string), name, description, distance, duration, origin, destination })

    return res.status(201).json({ route })
  }
}

export { CreateRouteController }