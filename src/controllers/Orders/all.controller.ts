import * as exp from 'express'
import  * as Services from './../../services/order.services'
import * as prod from './../../services/products.services'
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

    let response : any = []
    orders.forEach(async (element : any) => {
    
        let datas = element
        datas.products = [] 
        let ids = datas.list.split(",")
        ids.forEach(async (id : any) => {
            let product = await prod.Get(Number(id))
            datas.products.push(product)
        })
        
        response.push(datas)
    })

    

    res.status(200).send(response)

}

export default GetAll