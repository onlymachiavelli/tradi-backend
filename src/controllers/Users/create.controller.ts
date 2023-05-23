import Users from "../../models/users.entity"
import * as exp from 'express'
import bcrypt from "bcrypt"
import JWT from 'jsonwebtoken'
import format from 'date-and-time'
const CreateUser : exp.RequestHandler = async (req, res) =>{

    const datas : any = req.body

    if (!datas.username || !datas.role || !datas.email || !datas.phone || !datas.password || !datas.fullname ||!datas.password) {
        
        res.status(400).send("Invalid Given Datas ")
        return 
    }
    const user = new Users 
    const now :any = format.format(new Date, "YYYY-MM-DD")
    user.username = datas.username
    user.role = datas.role
    user.email = datas.email
    user.phone = datas.phone
    
    user.fullname = datas.fullname
    user.created_at = now
    user.updated_at = now
    user.picture = datas.picture ? datas.picture : null



    const saltRound: number = Number(process.env.SALT)
    user.password = await bcrypt
      .genSalt(saltRound)
      .then((s) => bcrypt.hash(datas.password, s))


    await Users.save(user).then(resp=>{
        const token = JWT.sign({id : resp.id, role : resp.role}, process.env.JWT_SECRET as string)
        res.cookie("token", token, {httpOnly : true, maxAge : 1000*60*60*24*7})
        res.status(201).send(resp)
    })
    .catch(err=>{
        res.status(500).send("Internal Error ! please contact the owner ASAP")
        console.log(err)
    })
    


}


export default CreateUser
