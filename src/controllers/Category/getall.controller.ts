import * as Services from './../../services/category.services'
import * as exp from 'express'

const GetAll :exp.RequestHandler = async (req,res) =>{

    Services.getAll().then(resp =>{
        res.status(200).send(resp)
    }).catch(e=>{
        res.status(500).send("Internal error please contact us soon")
        console.log(e)
    })
}


export default GetAll