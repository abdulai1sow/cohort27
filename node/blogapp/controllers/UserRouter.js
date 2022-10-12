const express = require('express')
const UserModel = require('../models/userSchema')

const router = express.Router()

//===get
router.get('/users', async (req, res) => {
  try {
    const users = await Usermodel.find()
    res.send(users)
  } catch (err) {
    req.status(500).json(err)
  }
})

//===get by id
router.get('/:id', async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id)
  } catch (err) {
    console.log(err);
    res.status(403).send('cannot get')
  }
})

//===post method





module.exports = router;
