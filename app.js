const express = require('express')
const userRouter = require('./routes/user.route')
const app= express()
const cors = require("cors")
require('./config/db')

// middle wears 
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/users',userRouter)

app.get('/',(req,res)=>{
    res.sendFile(__dirname+ "/./views/index.html")
})

// error handle for client side 
app.use((req,res,next)=>{
    res.status(404).json({message:'route not match with request'})
})
// handle server side error
app.use((err,req,res,next)=>{
    res.status(500).json({ message: "something broken " });
})

module.exports= app 
