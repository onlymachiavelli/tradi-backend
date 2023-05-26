import * as exp from 'express'
import * as Services from './../../services/products.services'

const GetAll: exp.RequestHandler = async (req, res) => {

  // Get the data
  const datas: any = await Services.GetAll()

  if (req.query.filter) {

    const filter = req.query.filter as string 

    // Filter by name 
    let response: any = []
    for (const element of datas) {
      if (element.title.toLowerCase().includes(filter.toLowerCase())) {
        response.push(element)
      }
    }

    // Filter by description  
    for (const element of datas) {
      if (element.description.includes(filter)) {
        response.push(element)
      }
    }
    
    res.status(200).send(response)
    return
  }

  if (req.query.id) {
    const id = req.query.id as string 
    for (const element of datas) {
      if (element.id == id) {
        res.status(200).send(element)
        return
      }
    }

    res.status(404).send("Not Found")
    return
  }

  res.status(200).send(datas)
}

export default GetAll
