// import mongoose
const mongoose = require("mongoose");

// create schema for entity
const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, required: true},
    password: { type: String, required: true},
    followers: [String],
    following: [String]
})

// create model of schema
const User = mongoose.model("User", userSchema);

//create crud dunction on model
//Create user
async function register(username, password) {
    const user = await getUser(username);
   
    if(user) throw Error('Username already in use');

    const newUser = await User.create({
        username: username,
        password: password
    });

    return newUser;
}

//read user
async function login(username, password) {
    const user = await getUser(username);
    if(!user) throw Error ('User Not Found');
    if(user.password != password) throw Error ('Wrong Password');

    return user;
}

//update
async function updatePassword(id, password) {
    const user = await User.updateOne({"_id": id}, {$set: {password: password}});
    return user;
}

//delete
async function deleteUser(id) {
    await User.deleteOne({"_id": id});
}

//utility function
async function getUser(username) {
    return await User.findOne({"username": username})
}

//export all functions to routes
module.exports = {register, login, updatePassword, deleteUser
};