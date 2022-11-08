import express from 'express'
import cors from 'cors'
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient({
  log: ['query'],
});


const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send({ message: 'Hello, world!' })
})

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`)
})
