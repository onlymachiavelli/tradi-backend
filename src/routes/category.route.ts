import { Router } from "express"
import CreateCategory from "../controllers/Category/create.controller"


const CatRouter = Router()
CatRouter.post("/", CreateCategory)


export default CatRouter