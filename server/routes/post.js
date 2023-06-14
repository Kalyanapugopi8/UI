const express = require('express');
const post = require('../models/post');
const router = express.Router();

router
//read post
.post('/getpost', async (req, res) => {
    try {
      let noteget = await post.getpost(req.body.id);
      res.send(noteget)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

//create post
  .post('/createpost', async (req, res) => {
    try {
      let postcreates = await post.createpost(req.body.id, req.body.title, req.body.content);
      res.send(postcreates)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  //update post
  .post('/updatepost', async (req, res) => {
    try {
      let postupdates = await post.updatepost(req.body.id, req.body.title, req.body.content);
      res.send(postupdates)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  
  //delete post
  .post('/deletepost', async (req, res) => {
    try {
      let postdeletes= await post.deletepost(req.body.id);
      res.send(postdeletes)
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
module.exports=router;