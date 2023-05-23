import { Router } from "express"
import Save from "../controllers/Orders/Save.controller"
import GetAll from "../controllers/Orders/all.controller"


const OrderRouter = Router()
OrderRouter.post("/",Save)

OrderRouter.get("/",GetAll)

export default OrderRouter