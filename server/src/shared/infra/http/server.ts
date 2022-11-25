import "reflect-metadata"
import 'express-async-errors'

import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import { router } from "./routes"
import { AppError } from "../../errors/AppError"
import "../../../shared/container"


const app = express()

app.use(express.json())
app.use(cors())

app.use(router)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message
    })
  }

  return res.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  })
})

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`)
})
