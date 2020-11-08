const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{type:String},
    userEmail:{type:String},
    password:{type:String},
    fullName:{type:String},
    firstIp:{type:String},
    lastIp:{type:String},
    createdOn:{type:Date},
    updatedOn:{type:Date},
    updateCount:{type:Number},
    history:[{
        fullName:{type:String},
        password:{type:String},
        ip:{type:String},
        updatedOn:{type:Date},
        mac:{type:String},
        browser:{type:String}
    }]
}, {timestamps:true});

const Users = mongoose.model("User", UserSchema);

module.exports = Users;