import Products from "../models/products.entity"



const Save = async (datas : any) =>{
    await Products.save(datas)
}
const GetAll = async () =>{
    return await Products.find()
}

const Get = async (id: any) =>{
    return await Products.findOne({
        where:{
            id : id 
        }
    })
}


export {
    Save , 
    GetAll,
    Get
}