const express = require('express')
const UserModel = require('../models/userSchema')

const router = express.Router()

//===get
// router.get('/user', async (req, res) => {
//   try {
//     const users = await Usermodel.find()
//     res.render('register/Register',{register: registerDb})
//   } catch (err) {
//     req.status(500).json(err)
//   }
// })
//===get
router.get('/', async (req, res) => {
  try {
    const user = await UserModel.find()
    res.render('user/Users', {UserModel:user})
  } catch (err) {
    res.status(500).json(err)
  }
})

//===get by id
router.get('/:id', async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id)
  } catch (err) {
    console.log(err);
    res.status(403).send('cannot get user by id')
  }
})

//===post method
router.post('/', async (req, res) => {
  try {
    //check if user exist
    const userAlreadyExist = await UserModel.find({ email: req.body.email });
    //must put a return if there is other res.send
    //is there is a object inside of the array
    if (userAlreadyExist[0]) {
      return res.send('User already exist')
    }
    //create new user
    const newUser = await UserModel.create(req.body)
    res.send(newUser)
  } catch (err) {
    console.log(err);
    res.status(403).send('cannot create')
  }
})

///==== PUT update by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body,
      // { 'returnDocument': 'after' } or >
      { new: true }
    )
    res.send(updatedUser)
  } catch (err) {
    res.status(403).send('cannot update')
  }
})

//====DELET
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndRemove(req.params.id)
    console.log(deletedUser);
    res.send('User deleted')
  } catch (err) {
    console.log(err);
    res.status(403).send('cannot delete')
  }
})


module.exports = router;
