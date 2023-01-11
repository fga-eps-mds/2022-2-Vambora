import { Request, Response } from "express";

class CreateRouteController {
  async handle(req: Request, res: Response) {
    const { name, description, distance, duration, origin, destination } = req.body
  }
}

export { CreateRouteController }