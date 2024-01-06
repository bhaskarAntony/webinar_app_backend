const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    profile:{
        type:URL,
        required:true
    },
    postTitle:{
        type:String,
        required:true
    },
    postImage:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
const PostModel = new mongoose.model('posts', PostSchema)

module.exports = PostModel