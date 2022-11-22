import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) { }

  async handle(req: Request, res: Response) {
    const { email, name, enrollment, password } = req.body

    this.createUserUseCase.execute({
      email,
      name,
      enrollment,
      password
    })

    return res.status(201).send()
  }
}

export { CreateUserController }