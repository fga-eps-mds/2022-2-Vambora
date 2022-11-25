import { Router } from "express";
import { CreateUserController } from "../../../../modules/users/useCases/createUser/CreateUserController";

export const userRoutes = Router()

const createUserController = new CreateUserController()

userRoutes.post("/register", createUserController.handle)