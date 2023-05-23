import Orders from './../models/orders.entity'


const Save = async (datas : any) =>{
    await Orders.save(datas)
}
const GetAll = async () =>{
    return await Orders.find()
}




export {
    Save, GetAll
}