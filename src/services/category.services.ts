import Category from "../models/category.entity"


const saveCat = async (datas : any ) =>{
    await Category.save(datas)
}


const getCat = async (id : any) =>{
    return await Category.findOne({
        where:{
            id : id 
        }
    })
}
const getCats = async (id : any) =>{
    return await Category.find(id)
}

const updateCat = async (id : any, datas : any) =>{
    await Category.update(id,datas)
}


const deleteCat = async (id : any) =>{
    await Category.delete(id)
}

const getAll = async () => {return await Category.find()}

export {
    saveCat,
    getCat,
    getCats,
    updateCat,
    deleteCat,
    getAll
}