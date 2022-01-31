// import userModelLast from '../models/userModel'
import { PrismaClient } from '@prisma/client'
import { config } from 'dotenv'

config()

const prisma = new PrismaClient()

async function register(req, res) {
  try {
    await prisma.user.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
      },
    })

    return res.status(201).send({ msg: 'User created!!!' })
  } catch (error) {
    return res.status(400).send({ msg: 'ERROR!!', error })
  }
}

async function getAll(req, res) {
  try {
    const data = await prisma.user.findMany()

    return res.status(200).json(data)
  } catch (error) {
    return res.status(400).json({ msg: 'ERROR!!' })
  }
}

export default { register, getAll }
