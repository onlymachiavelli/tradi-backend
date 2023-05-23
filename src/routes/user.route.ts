import Router from 'express'
import CreateUser from '../controllers/Users/create.controller'
import Auth from '../controllers/Users/auth.controller'
const userRoute = Router()

userRoute.post("/", CreateUser)
userRoute.post("/auth", Auth)

export default userRoute

