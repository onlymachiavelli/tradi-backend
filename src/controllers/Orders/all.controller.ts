import * as exp from 'express'
import  * as Services from './../../services/order.services'

import JWT from 'jsonwebtoken' 
const GetAll:exp.RequestHandler = async (req,res) =>{

    //verify token 
    const token = req.cookies.token 
    if (!token) {
        res.status(401).send("Unauthorized")
        return
    }

    const decoded : any = JWT.verify(token, process.env.JWT_SECRET as string)
    if (!decoded) {
        res.status(401).send("Unauthorized")
        return
    }

    //get the datas !
    const orders : any = await Services.GetAll()

    res.status(200).send(orders)

}

export default GetAll