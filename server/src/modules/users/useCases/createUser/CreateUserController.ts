import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, name, enrollment, password } = req.body

    const createUserUseCase = container.resolve(CreateUserUseCase)

    await createUserUseCase.execute({
      email,
      name,
      enrollment,
      password
    })

    return res.status(201).send()
  }
}

export { CreateUserController }