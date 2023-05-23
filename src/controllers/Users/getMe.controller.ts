import * as exp from 'express'
import * as Services from './../../services/user.services'
import JWT from 'jsonwebtoken'

const GetMe :exp.RequestHandler = async (req, res) =>{
    //get the token 

    const token : any = req.cookies.token
    console.log(token)
    if (!token) {

        res.status(401).send("Unauthorized ! ")
        return 
    }

    //verify the token 
    
    const decoded : any = JWT.verify(token, process.env.JWT_SECRET as string)
    if (!decoded) {
        res.status(401).send("Unauthorized ! ")
        return 
    }
    //get the user
    const user : any = await Services.getOne("id", decoded.id)
    if (!user) {
        res.status(404).send("User not found ! ")
        return 
    }
    res.status(200).send(user)
    

}


export default GetMe




