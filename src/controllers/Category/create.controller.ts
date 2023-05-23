import * as exp from 'express'
import * as Services from './../../services/category.services'
import JWT from 'jsonwebtoken'
import format from 'date-and-time'
import Category from '../../models/category.entity'

const CreateCategory :exp.RequestHandler= async (req, res) =>{
    //get the token 
    const token = req.cookies.token 
    if (!token) {
        res.status(401).json({message : "unauthorized"})
        return 
    }
    
    const decoded : any = JWT.verify(token,process.env.JWT_SECRET as string)
    if (!decoded) {
        res.status(401).send({message : "unauthorized"})
        return 
    }
    const datas = req.body
    const id = decoded.id
    const now : any  = format.format(new Date(), 'YYYY/MM/DD HH:mm:ss')

    const cat : any = new Category

    cat.title = datas.title
    cat.description = datas.description
    cat.logo = datas.logo ? datas.logo : null
    cat.created_at = now
    cat.updated_at = now
    cat.user = id
    
    Services.saveCat(cat).then(resp =>{
        res.status(201).send("Category has been added to the database ")
    }).catch(e=>{
        res.status(500).send("Internal error please contact us soon")
        console.log(e)
    })
}


export default CreateCategory