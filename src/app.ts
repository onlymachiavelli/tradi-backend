import express from "express"
import "dotenv/config"
import { json } from "body-parser"
import appDataSource from "./utils/POSTGRES"
//import cookie-parser 
const cookieParser = require("cookie-parser")
import userRoute from "./routes/user.route"
import CatRouter from "./routes/category.route"
import ProdRouter from "./routes/product.route"
import OrderRouter from "./routes/order.route"
const cors = require("cors")


const app = express()


app.use(json())
app.use(cors())

app.use(cookieParser())
const PORT: any = process.env.PORT || 3000
app
  .listen(PORT, () => {
    console.log(`Listening on ${PORT}`)

    appDataSource
      .initialize()
      .then((res: any) => {
        console.log("Connected to the database ! ")
        //middlewares 
        app.use("/me", userRoute)
        app.use("/category", CatRouter)
        app.use("/product", ProdRouter)
        app.use("/orders", OrderRouter)
        
      })
      .catch((e: any) => {
        console.log(e)
      })
  })
  .on("error", (e:any) => {
    console.log("There's an error ! " ,e )
  })
