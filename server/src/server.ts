import express from 'express'
import cors from 'cors'
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ['query'],
});

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {

  await prisma.user.create({
    data: {
      name: 'jorgão',
      email: 'jorgão@gmail.com',
      enrollment: '321411',
      password: '123456',
    }
  })
  res.send({ message: 'Hello, world !' })
})

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`)
})
