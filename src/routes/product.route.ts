import {Router} from 'express'
import Save from '../controllers/Products/save.controller'
const ProdRouter = Router()

ProdRouter.post("/",Save )

export default ProdRouter