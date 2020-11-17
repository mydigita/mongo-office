
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String},
    firstName:{type:String},
    lastName:{type:String},    
    mobile:{type:Number} 
}, {timestamps:true});

const Users = mongoose.model("User", UserSchema);

module.exports = Users;