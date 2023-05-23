import * as Services from './../../services/products.services'
import * as exp from 'express'
import JWT from 'jsonwebtoken'
import * as usr from './../../services/user.services'
import Products from '../../models/products.entity'
import * as cat from './../../services/category.services'
import format from 'date-and-time'
const Save:exp.RequestHandler = async (req, res) =>{
    //get the token 
    const token = req.cookies.token 

    if (!token) {
        res.status(401).send("You are not authorized")
        return
    }

    
    
    const decodedToken :any =  JWT.verify(token,process.env.JWT_SECRET as string )

    if (!decodedToken) {
        res.status(401).send("You are not authorized")
        return
    }

    const datas = req.body
    if (!datas.title || !datas.price || !datas.description) {
        res.status(400).send("Please provide all the datas")
        return

    }
    const user : any  = await usr.getOne("id", decodedToken.id)
    if (!user) {
        res.status(401).send("You are not authorized")
        return
    }
    const prod : any = new Products
    prod.title = datas.title
    prod.description = datas.description
    prod.price = datas.price
    prod.addedby = user
    const now : any = format.format(new Date, 'YYYY-MM-DD HH:mm:ss')
    prod.created_at = now 
    prod.updated_at = now
    prod.image = datas.image 


    const category : any = await cat.getCat(datas.category)
    if (!category) {
        res.status(400).send("Please provide a valid category")
        return
    }
    prod.category = category

    Services.Save(prod).then(resp =>{
        res.status(200).send("Product is added")
    }
    ).catch(e=>{
        res.status(500).send("Internal error please contact us soon")
        console.log(e)
    }
    )

    
}


export default Save