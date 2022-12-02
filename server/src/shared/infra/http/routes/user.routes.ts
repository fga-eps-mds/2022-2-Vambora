import { Router } from 'express';
import { CreateUserController } from '../../../../modules/users/useCases/createUser/CreateUserController';
import { DeleteUserController } from '../../../../modules/users/useCases/deleteUser/DeleteUserController';
import { LoginUserController } from '../../../../modules/users/useCases/loginUser/LoginUserController';
import { ReadUserController } from '../../../../modules/users/useCases/readUser/ReadUserController';
import { UpdateUserController } from '../../../../modules/users/useCases/updateUser/UpdateUserController';
import { VerifyUserController } from '../../../../modules/users/useCases/verifyUser/VerifyUserController';

export const userRoutes = Router();

const createUserController = new CreateUserController();
const verifyUserController = new VerifyUserController();
const loginUserController = new LoginUserController();
const readUserController = new ReadUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

userRoutes.post('/', createUserController.handle);
userRoutes.post('/verify', verifyUserController.handle);
userRoutes.post('/login', loginUserController.handle);
userRoutes.get('/', readUserController.handle);
userRoutes.patch('/', updateUserController.handle);
userRoutes.delete('/', deleteUserController.handle);
