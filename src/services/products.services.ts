import Products from "../models/products.entity"



const Save = async (datas : any) =>{
    await Products.save(datas)
}
const GetAll = async () =>{
    return await Products.find()
}



export {
    Save , 
    GetAll
}