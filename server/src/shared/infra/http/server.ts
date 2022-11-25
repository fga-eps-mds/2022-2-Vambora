import "reflect-metadata"
import express from 'express'
import cors from 'cors'
import "../../../shared/container"
import { router } from "./routes"

const app = express()

app.use(express.json())
app.use(cors())

app.use(router)

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`)
})
