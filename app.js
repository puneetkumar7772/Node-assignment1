const express = require("express")
const {connection} = require("./config/db")
const userRoute = require('./routes/userRoutes')
const app = express()
app.use(express.json());
connection();
app.use('/api',userRoute)

  
app.listen(3000,(req,res)=>{
    console.log("Server is connected successfully");
})