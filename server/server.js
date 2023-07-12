import Express from "express";
import route from "./Routes/studentRoutes.js";
import  cors  from "cors";
import dotenv from "dotenv";
import conn from "./DataBase/conn.js";


const app = Express()
dotenv.config()
app.use(Express.json())

app.use(cors())

app.use(route)


conn().then(()=>{
    app.listen(5000, ()=>{
        console.log("server start on Port 5000")
    })
}).catch(err =>{
    console.log(err)
})

