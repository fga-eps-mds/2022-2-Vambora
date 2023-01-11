import { CreateRouteController } from "@modules/routes/useCases/createRoute/CreateRouteController";
import ensureAuthenticated from "@shared/middlewares/ensureAuthenticated";
import { Router } from "express";

export const routesRoutes = Router()

const createRouteController = new CreateRouteController()

routesRoutes.post("/", ensureAuthenticated, createRouteController.handle)