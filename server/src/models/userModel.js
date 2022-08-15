const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
        fullname: 
        { type: String, required: true ,trim:true},
        
        email: { type: String, required: true, unique:true,trim:true },
        profileImage: { type: String, trim:true},
        phoneno:{type:Number,required:true,unique:true,trim:true},
        password: { type: String, required: true ,trim:true},
        
        


}, { timestamps: true });

module.exports = mongoose.model("User", userSchema)