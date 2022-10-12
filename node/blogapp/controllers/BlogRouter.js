const express = require('express')
const BlogModel = require('../models/blogSchema')

const router = express.Router()

//===get
router.get('/', async (req, res) => {
  try {
    const blogs = await BlogModel.find()
    res.send(blogs)
  } catch (err) {
    res.status(500).json(err)
  }
})
///====get by id
router.get('/:id', async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id)
    res.send(blog)
  } catch (err) {
    console.log(err);
    res.status(403).send('cannot get')
  }
})
//===post method
router.post('/', async (req, res) => {
  try {
    const newBlog = await BlogModel.create(req.body)
    res.send(newBlog)
  } catch (err){
    console.log(err);
    res.status(403).send('cannot create')
  }
})
// router.post('/', (req, res) => {
//   console.log(req.body);

//   BlogModel.create(req.body)
//     .then(data => {
//       console.log(data);
//       res.send(data)
//     }).catch(err => {
//       console.log(err);
//       res.status(403).send('cannot create')
//   })
// })

///==== PUT update by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body,
      // { 'returnDocument': 'after' } or >
      {new:true}
    )
    res.send(updatedBlog)
  } catch (err) {
    res.status(403).send('cannot updat')
  }
})

//====DELET
router.delete('/:id', async (req, res) => {
  try {
    const deletedBlog = await BlogModel.findByIdAndRemove(req.params.id)
    console.log(deletedBlog);
    res.send('blog delete')
  } catch (err) {
    console.log(err);
    res.status(403).send('cannot put')
  }
})

module.exports = router;