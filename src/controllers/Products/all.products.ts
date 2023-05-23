import * as exp from 'express'
import * as Services from './../../services/products.services'

const GetAll:exp.RequestHandler = async (req,res) =>{

    //get the datas ! 
    const datas : any = await Services.GetAll()
    if (req.query.filter) {
        
        const filter = req.query.filter as string 
        //filter by name 
        let response : any = []
        datas.forEach((element : any) => {
            if (element.title.includes(filter)) {
                response.push(element)
            }
        }
        )

        //filter by description  

        datas.forEach((element : any) => {
            if (element.description.includes(filter)) {
                response.push(element)
            }
        }
        )
        res.status(200).send(response)
        return
    }

    if (req.query.id) {
        const id = req.query.id as string 
        datas.forEach((element : any) => {
            if (element.id == id) {
                res.status(200).send(element)
                return
            }
        }
        )
        res.status(404).send("Not Found")
        return
    }
    res.status(200).send(datas)
}

export default GetAll