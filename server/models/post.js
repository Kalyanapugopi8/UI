// import mongoose
const mongoose = require("mongoose");

// create schema for entity
const postSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    likes: [{ type: String }],
    locations: [String]
});

// create model of schema
const post = mongoose.model("Post", postSchema);

// CRUD functions for posts

// Create post
async function createpost(id, title, content) {
    const newPost = await Post.create({
        userID: id,
        title: title,
        content: content,
        likes: 0,
        location: location
    });

    return newPost;
}

// Read post
async function getpost(id) {
    return await post.findOne({"_id": id});
  }

// Update post
async function updatepost(id, title, content) {
    const post = await post.updateOne({"_id": id}, 
    {$set: { content: content, title: title}});
    return post;
  
}

// Delete post
async function deletePost(id) {
    await Post.deleteOne({"_id": id});
}

// Export all functions to routes
module.exports = {createpost, getpost, updatepost, deletePost};






