import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, name, enrollment, password } = req.body

    const createUserUseCase = container.resolve(CreateUserUseCase)

    try {
      await createUserUseCase.execute({
        email,
        name,
        enrollment,
        password
      })

      return res.status(201).send()
    } catch (error) {
      return res.status(400).json({ message: "Failed to create user" })
    }
  }
}

export { CreateUserController }