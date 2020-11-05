const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{type:String},
    user_email:{type:String},
    password:{type:String},
    full_name:{type:String},
    first_ip:{type:String},
    last_ip:{type:String},
    created_on:{type:Date},
    updated_on:{type:Date},
    update_count:{type:Number},
    history:[{
        full_name:{type:String},
        password:{type:String},
        ip:{type:String},
        updated_on:{type:Date},
        mac:{type:String},
        browser:{type:String}
    }]
}, {timestamps:true});

const User = mongoose.model("User", UserSchema);

module.exports = User;