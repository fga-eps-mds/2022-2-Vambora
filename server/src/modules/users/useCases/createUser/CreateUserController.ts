import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { container } from "tsyringe";
import { AppError } from "@shared/errors/AppError";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { email, name, enrollment, password } = req.body

    if (!email || !name || !enrollment || !password) {
      throw new AppError("Missing parameters")
    }

    const createUserUseCase = container.resolve(CreateUserUseCase)

    const user = await createUserUseCase.execute({
      email,
      name,
      enrollment,
      password
    })

    return res.status(201).json({ message: "User created sucessfully", id: user.id })
  }
}

export { CreateUserController }