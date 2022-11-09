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
      name: 'jorgin',
      email: 'jorginhoo@gmail.com',
      enrollment: '3214',
      password: '123456',
    }
  })
  res.send({ message: 'Hello, world!!' })
  console.log("teste")

})

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`)
})
