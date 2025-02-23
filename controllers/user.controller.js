const User = require("../models/user.model");
const { v4: uuid4 } = require("uuid");



//! get all users
const getAllUsers = async(req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
} catch (error) {
  res.status(500).send(error.message)
}
};
//! get one user
const getOneUser = async(req, res) => {
  try {
    // findById;
    const user = await User.findOne({ id: req.params.id });
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json({message:error.message})
  }
};
//! create one user
const createUser = async (req, res) => {
  try {
    const newUser = new User({
      id: uuid4(),
      name: req.body.name,
      age: Number(req.body.age),
    });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
//! update user
const updateUser = async(req, res) => {
  try {
    const user = await User.findOneAndUpdate({ id: req.params.id });
    user.name = req.body.name 
    user.age = Number(req.body.age)
   const updateUser= await user.save()
    res.status(200).json(updateUser)
  } catch (error) {
    res.status(200).json({ message: error.message});
  }
};

//! delete one user
const deleteUser = async(req, res) => {
  try {
    await User.findOneAndDelete({ id: req.params.id });
    res.status(200).json({message:'user is deleted '})
  } catch (error) {
    res.status(500).json({message:error.message})
  }
};


module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser,
};
