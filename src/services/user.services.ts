import Users from "../models/users.entity"



const CreateUser = async (datas : any) => {
    await Users.save(datas)
}

const getOne = async (field : any, target : any) =>{
    return Users.findOne({
        select:["created_at", "email", "id", "phone", "picture", "role","username","updated_at", "fullname"], 
        where : {
            [field] : target
        }
    })
    


}


const getPass = async (field : any, target : any) =>{
    return await Users.findOne({
        select:["password"],
        where : {
            [field] : target
        }
    })
}




export {
    CreateUser, 
    getOne, 
    getPass
}