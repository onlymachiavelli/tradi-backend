import { Router } from "express"
import CreateCategory from "../controllers/Category/create.controller"
import GetAll from "../controllers/Category/getall.controller"

const CatRouter = Router()
CatRouter.post("/", CreateCategory)
CatRouter.get("/", GetAll)

export default CatRouter