import Router from 'express'
import CreateUser from '../controllers/Users/create.controller'
import Auth from '../controllers/Users/auth.controller'
import GetMe from '../controllers/Users/getMe.controller'
const userRoute = Router()

userRoute.post("/", CreateUser)
userRoute.post("/auth", Auth)
userRoute.get("/", GetMe)
export default userRoute

