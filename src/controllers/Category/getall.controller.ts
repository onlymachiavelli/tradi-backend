import * as Services from './../../services/category.services'
import JWT from 'jsonwebtoken'
import * as exp from 'express'

const GetAll :exp.RequestHandler = async (req,res) =>{
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
    Services.getAll().then(resp =>{
        res.status(200).send(resp)
    }).catch(e=>{
        res.status(500).send("Internal error please contact us soon")
        console.log(e)
    })
}


export default GetAll