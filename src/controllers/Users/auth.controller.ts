import * as Services from './../../services/user.services'
import * as exp from 'express'
import JWT from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const Auth :exp.RequestHandler = async (req, res) =>{

    const datas = req.body 

    if (!datas.username || !datas.password) {
        res.status(400).send("Invalid Given Datas ")
        return 
    }

    const user : any = await Services.getOne("username" , datas.username) 
    console.log(user.id);
    
    if (!user) {
        res.status(404).send("User not found ! ")
        return 
    }
    const password : any = await Services.getPass("id" , user.id)
    if (!password) {
        res.status(500).send("Internal Error ! please contact the owner ASAP")

        return
    }
    console.log(password)
    const isValid : boolean = await bcrypt.compare(datas.password , password.password)
    if (!isValid) {
        res.status(401).send("Invalid Password ! ")
        return 
    }
    console.log(isValid)
    const token = JWT.sign({id : user.id, role : user.role}, process.env.JWT_SECRET as string)
    res.cookie("token", token, {httpOnly : true, maxAge : 1000*60*60*24*7})
    res.status(200).send(token)
} 

export default Auth