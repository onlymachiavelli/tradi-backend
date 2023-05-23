import * as Services from './../../services/order.services'
import format from 'date-and-time'
import * as exp from 'express'
import Orders from '../../models/orders.entity'

const Save :exp.RequestHandler = async (req, res)=>{
    const datas = req.body 
    if (!datas.fullname || !datas.list || !datas.phone || !datas.address ){
        res.status(400).send("Bad Request")
        return
    }

    const order :any = new Orders 
    const now : any = format.format(new Date, 'YYYY-MM-DD HH:mm:ss')
    order.created_at = now 
    order.updated_at = now 
    order.fullname = datas.fullname
    order.phone = datas.phone
    order.email = datas.email
    order.address = datas.address
    order.list = datas.list
    order.reviewd = false
    await Services.Save(order).then (resp=>{
        res.status(201).send(resp)
    })
    .catch(err=>{
        res.status(500).send("Internal Error ! please contact us soon !")
        console.log(err)
    })
}

export default Save