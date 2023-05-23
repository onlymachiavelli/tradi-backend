import {Router} from 'express'
import Save from '../controllers/Products/save.controller'
import GetAll from '../controllers/Products/all.products'
const ProdRouter = Router()

ProdRouter.post("/",Save )
ProdRouter.get("/",GetAll)

export default ProdRouter