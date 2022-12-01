import exp from "constants";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { UpdateUserUseCase } from "./UpdateUserUseCase";


class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.headers;
    const { email, name, enrollment } = req.body;

    if (!user_id) {
      throw new AppError('Invalid parameters');
    }

    const updateUserUseCase = container.resolve(UpdateUserUseCase)

    const user = await updateUserUseCase.execute(user_id as string, email, name, enrollment);

    res.status(200).json(user)
  }
}

export { UpdateUserController }