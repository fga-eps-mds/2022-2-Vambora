import { Router } from "express";
import { createUserController } from "../../../../modules/users/useCases/createUser";

export const userRoutes = Router()

userRoutes.get("/register", createUserController.handle)
