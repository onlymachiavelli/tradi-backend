import * as express from 'express';
import * as Services from './../../services/order.services';
import * as prod from './../../services/products.services';
import JWT from 'jsonwebtoken';

const GetAll: express.RequestHandler = async (req, res) => {
  // Verify token
  const token : any = req.headers.authorization?.split(" ")[1]
    console.log(token)
    if (!token) {

        res.status(401).send("Unauthorized ! ")
        return 
    }

  const decoded: any = JWT.verify(token, process.env.JWT_SECRET as string);
  if (!decoded) {
    res.status(401).send('Unauthorized');
    return;
  }

  // Get the data
  const orders: any = await Services.GetAll();

  let response: any = [];
  for (const element of orders) {
    let datas = element;
    datas.products = [];
    let ids = datas.list.split(',');
    for (const id of ids) {
      let product = await prod.Get(Number(id));
      datas.products.push(product);
    }

    response.push(datas);
  }

  res.status(200).send(response);
};

export default GetAll;
