// user route 
const express = require("express")
const { getAllUsers, createUser, getOneUser, deleteUser, updateUser } = require("../controllers/user.controller")
const router = express.Router()



// show users to client side 
router.get('/',getAllUsers)

// create user 
router.post('/',createUser)
// get one user by id 
router.get('/:id',getOneUser)
// delete one user by id 
router.delete('/:id',deleteUser)
router.patch('/:id',(updateUser))

module.exports=router
// 
// 
// "mongodb+srv://MamunRestAPI:q2suM5daIiInzGnC@cluster0.34ihq.mongodb.net/userDemoDB
