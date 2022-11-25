import { Router } from "express";
import { CreateUserController } from "../../../../modules/users/useCases/createUser/CreateUserController";
import { VerifyUserController } from "../../../../modules/users/useCases/verifyUser/VerifyUserController";

export const userRoutes = Router()

const createUserController = new CreateUserController()
const verifyUserController = new VerifyUserController()

userRoutes.post("/register", createUserController.handle)
userRoutes.post("/verify/:id", verifyUserController.handle)
