import Router from 'express'
import CreateUser from '../controllers/Users/create.controller'

const userRoute = Router()

userRoute.post("/", CreateUser)


export default userRoute

