import { beforeAll, describe, it } from 'vitest'
import { UsersRepositoryInMemory } from '../../repositories/in-memory/UsersRepositoryInMemory'
import { IUsersRepository } from '../../repositories/IUsersRepository'
import { CreateUserUseCase } from './CreateUserUseCase'

let usersRepositoryInMemory: IUsersRepository
let createUserUseCase: CreateUserUseCase

describe("Create User", () => {
  beforeAll(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory()
    // createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory, )
  })

  it("should be able to create a new user", () => { })
})