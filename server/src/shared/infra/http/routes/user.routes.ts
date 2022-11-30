import { Router } from 'express';
import { CreateUserController } from '../../../../modules/users/useCases/createUser/CreateUserController';
import { LoginUserController } from '../../../../modules/users/useCases/loginUser/LoginUserController';
import { ReadUserController } from '../../../../modules/users/useCases/readUser/ReadUserController';
import { VerifyUserController } from '../../../../modules/users/useCases/verifyUser/VerifyUserController';

export const userRoutes = Router();

const createUserController = new CreateUserController();
const verifyUserController = new VerifyUserController();
const loginUserController = new LoginUserController();
const readUserController = new ReadUserController();

userRoutes.post('/register', createUserController.handle);
userRoutes.post('/verify', verifyUserController.handle);
userRoutes.post('/login', loginUserController.handle);
userRoutes.get('/', readUserController.handle);
