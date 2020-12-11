const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MongoTestSchema = new Schema({
    username:{type:String},
    details:[]
}, {timestamps:true});

const MongoTest = mongoose.model("MongoTest", UserSchema);

module.exports = MongoTest;