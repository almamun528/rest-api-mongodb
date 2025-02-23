const express = require('express')
const app= express()
const cors = require("cors")

// middle wears 
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.get('/',(req,res)=>{
    res.sendFile(__dirname+ "/./views/index.html")
})

// error handle 
app.use((req,res,next)=>{
    res.send('request not match with any route')
})

module.exports= app 
