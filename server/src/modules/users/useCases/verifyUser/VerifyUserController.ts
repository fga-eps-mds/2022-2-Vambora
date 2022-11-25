import { Request, Response } from "express";
import { container } from "tsyringe";
import { VerifyUserUseCase } from "./VerifyUserUseCase";

class VerifyUserController {
  async handle(req: Request, res: Response) {
    const { id: user_id } = req.params
    const { verificationCode } = req.body

    const verifyUserUseCase = container.resolve(VerifyUserUseCase)

    await verifyUserUseCase.execute({ verificationCode, user_id })

    return res.status(200).json({ message: "Successfully verified user" })

  }
}

export { VerifyUserController }