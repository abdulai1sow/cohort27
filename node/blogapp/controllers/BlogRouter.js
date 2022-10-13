const express = require('express')
const BlogModel = require('../models/blogSchema')

const router = express.Router()

//===get
router.get('/', async (req, res) => {
  try {
    const blogs = await BlogModel.find()
    res.render('blog/Blog', {BlogModel: blogs})
  } catch (err) {
    res.status(500).json(err)
  }
})
//====render form
router.get('/new', (req, res) => {
  res.render('blog/New')
})
///====get by id
router.get('/:id/edit', async (req, res) => {
  try {
    const blog = await BlogModel.findById(req.params.id)
    res.render('blog/Edit',{blog: blog})
  } catch (err) {
    console.log(err);
    res.status(403).send('cannot get')
  }
})
//===post method
router.post('/', async (req, res) => {
  try {
    const newBlog = await BlogModel.create(req.body)
    res.redirect('/blog')
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
  console.log(req.body);
  try {
    const { id } = req.params
    const updatedBlog = await BlogModel.findByIdAndUpdate(req.params.id, req.body,
      { 'returnDocument': "after" })
    res.redirect(`/blog`)
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